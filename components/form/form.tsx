import React, { useState, useMemo } from 'react';
import { Form } from 'remax/one';
import classNames from 'classnames';
import { FormContext } from './context';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('form');

const getItemRulesObject = (children: React.ReactNode) => {
  const rules = React.Children.toArray(children).map((i: any) => ({
    name: i?.props?.name,
    rules: i?.props?.rules,
  }));
  const itemRulesObj: any = {};
  const nullValuesObj: any = {};
  rules.forEach(i => {
    if (i.name && i.rules && Array.isArray(i.rules)) {
      itemRulesObj[i.name] = i.rules;
      nullValuesObj[i.name] = undefined;
    }
  });
  return [itemRulesObj, nullValuesObj];
};

export interface ErrorProps {
  error?: boolean;
  message?: string;
}

export interface FormProps {
  children?: React.ReactNode;
  onFinish?: (v: any) => void;
  onFinishFailed?: (v: any, errorFields: any) => void;
  onReset?: (v: any) => void;
}

const AnnarForm: React.FC<FormProps> = (props: FormProps) => {
  const { children, onFinish, onFinishFailed, onReset } = props;

  const [itemRulesObj, nullValuesObj] = getItemRulesObject(children);

  const [values, setValues] = useState<any>(nullValuesObj);
  const [errors, setErrors] = useState<any>(nullValuesObj);

  const handleSubmit = (e: any) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    let errorFlag = false;
    const errorState: any = {};
    const errorFields: any = {};
    const names = Object.keys(values);
    for (let i = 0; i < names.length; i += 1) {
      const name = names[i];
      const value = values[name];
      const rules = itemRulesObj[name];
      if (rules) {
        for (let j = 0; j < rules.length; j += 1) {
          const rule = rules[j] || {};
          const { required, pattern, validator, message = `${name} is required` } = rule;
          if (required) {
            if (!value && value !== 0) {
              errorState[name] = { error: true, message };
              errorFields[name] = value;
              errorFlag = true;
              break;
            }
          }
          if (pattern) {
            const isPass = pattern.test(value);
            if (!isPass) {
              errorState[name] = { error: true, message };
              errorFields[name] = value;
              errorFlag = true;
              break;
            }
          }
          if (validator && typeof validator === 'function') {
            const result = validator(value);
            if (!result) {
              errorState[name] = { error: true, message };
              errorFields[name] = value;
              errorFlag = true;
              break;
            }
          }
        }
      }
    }
    if (errorFlag) {
      setErrors({
        ...nullValuesObj,
        ...errorState,
      });
      onFinishFailed?.(values, errorFields);
      return;
    }
    if (!errorFlag) {
      setErrors(nullValuesObj);
    }

    onFinish?.(values);
  };

  const handleChange = (e: any, name: string) => {
    const t = e.target;
    setValues((state: any) => ({
      ...state,
      [name]: t.value,
    }));
  };

  const handleChangeError = (v: any, name: string) => {
    setErrors((state: any) => ({
      ...state,
      [name]: v,
    }));
  };

  const providerValue = useMemo(
    () => ({ values, errors, onChange: handleChange, onChangeError: handleChangeError }),
    [values, errors],
  );

  return (
    <FormContext.Provider value={providerValue}>
      <Form className={classNames(prefixCls)} onSubmit={handleSubmit} onReset={onReset}>
        {children}
      </Form>
    </FormContext.Provider>
  );
};

export default AnnarForm;
