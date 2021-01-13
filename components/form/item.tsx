import React, { useContext, useEffect } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import Cell from '../cell';
import { FormContext, HOOK_KEY } from './context';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('form-item');

export interface FormItemProps {
  label?: React.ReactNode;
  border?: boolean;
  valueAlign?: 'left' | 'right' | 'center';
  required?: boolean;
  name?: string;
  icon?: string;
  rules?: any[];
  style?: React.CSSProperties;
  noStyle?: boolean;
  valuePropName?: string;
  trigger?: string;
  children?: React.ReactNode;
}

const count = 0;

const FormItem: React.FC<FormItemProps> = (props: FormItemProps) => {
  const {
    label,
    border = false,
    icon,
    required,
    valueAlign = 'right',
    name,
    rules,
    style,
    noStyle,
    valuePropName = 'value',
    trigger = 'onChange',
    children,
  } = props;

  const { onChange, onChangeError, formInstance }: any = useContext(FormContext);

  const { getFieldsValue, getFieldsError } = formInstance;

  const { registerField } = formInstance.getInternalHooks(HOOK_KEY);

  const store = getFieldsValue();

  const errors = getFieldsError();

  useEffect(() => {
    if (name) {
      registerField(props);
    }
  }, []);

  const handleChange = (e: any) => {
    const error = name ? errors[name] || {} : {};
    if (Array.isArray(rules) && Object.keys(error).length > 0) {
      onChangeError({}, name);
    }
    onChange?.(e, name);
  };

  const handleBlur = (e: any) => {
    const value = e.target.value;
    if (Array.isArray(rules)) {
      let errorFlag = false;
      let errorObj = {};
      for (let i = 0; i < rules.length; i += 1) {
        const rule = rules[i] || {};
        const { required, pattern, validator, message = `${name} is required` } = rule;
        if (required) {
          if (!value && value !== 0) {
            errorObj = { error: true, message };
            errorFlag = true;
            break;
          }
        }
        if (pattern) {
          const isPass = pattern.test(value);
          if (!isPass) {
            errorObj = { error: true, message };
            errorFlag = true;
            break;
          }
        }
        if (validator && typeof validator === 'function') {
          const result = validator(value);
          if (!result) {
            errorObj = { error: true, message };
            errorFlag = true;
            break;
          }
        }
      }
      if (errorFlag) {
        onChangeError(errorObj, name);
      }
      if (!errorFlag) {
        onChangeError({}, name);
      }
    }
  };

  let childrenNode = children;
  if (typeof children === 'object' && children !== null) {
    const { props: childrenProps } = children as any;
    if (childrenProps && name) {
      const onTrigger = (e: any) => {
        handleChange(e);
        childrenProps?.[trigger]?.(e);
      };
      // 这里给input的 value 赋值为 undefined 是不会改变显示的值，必须要设置为空字符串 ''
      childrenNode = {
        ...children,
        props: {
          ...childrenProps,
          [valuePropName]: store[name],
          [trigger]: onTrigger,
          onBlur: handleBlur,
        },
      };
    }
  }

  const renderErrorNode = () => {
    let height = '0';
    let errorMessage = null;

    if (name && errors[name] && errors[name].error) {
      height = '60px';
      errorMessage = errors?.[name]?.message;
    }
    return (
      <View className={`${prefixCls}-explain`} style={{ height }}>
        {errorMessage}
      </View>
    );
  };

  // count += 1;

  if (noStyle) {
    return (
      <React.Fragment key={count}>
        <View className={classNames(prefixCls)} style={style}>
          {childrenNode}
          {renderErrorNode()}
        </View>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment key={count}>
      <View className={classNames(prefixCls)} style={style}>
        <Cell
          label={label}
          border={border}
          icon={icon}
          required={required}
          field
          labelStyle={{ width: '180px' }}
          valueAlign={valueAlign}
        >
          {childrenNode}
        </Cell>
        {renderErrorNode()}
      </View>
    </React.Fragment>
  );
};

export default FormItem;
