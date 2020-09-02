import * as React from 'react';
import { View, Text } from 'remax/one';
import classNames from 'classnames';
import Icon from '../icon';
import FormValue from '../form-value';
import Picker from '../picker';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('cell');

export interface CellPureProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  description?: React.ReactNode;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  valueStyle?: React.CSSProperties;
  verticality?: boolean;
  icon?: string;
  required?: boolean;
  border?: boolean;
  arrow?: boolean;
  field?: string;
  defaultNullValue?: string;
  onTap?: () => void;
}

const CellPure: React.FC<CellPureProps> = (props: CellPureProps) => {
  const {
    label,
    style,
    labelStyle,
    valueStyle,
    children,
    description,
    verticality,
    icon,
    border = true,
    arrow,
    required,
    field,
    defaultNullValue = '',
    onTap,
  } = props;

  if (verticality) {
    return (
      <View className={prefixCls} style={style} onTap={onTap}>
        <View className={`${prefixCls}-verticality`}>
          {label ? (
            <View className={`${prefixCls}-verticality-label`} style={labelStyle}>
              {required ? <Text className={`${prefixCls}-verticality-required`}>*</Text> : null}
              {label}
            </View>
          ) : null}
          <View className={`${prefixCls}-verticality-value`} style={valueStyle}>
            {children}
          </View>
        </View>
      </View>
    );
  }

  return (
    <View className={prefixCls} style={style} onTap={onTap}>
      <View className={`${prefixCls}-container`}>
        <View className={`${prefixCls}-container-main`}>
          <View
            className={classNames(`${prefixCls}-container-main-left`, {
              [`${prefixCls}-container-main-left-input`]: field,
            })}
          >
            <View className={`${prefixCls}-container-main-left-label`}>
              {required ? (
                <Text className={`${prefixCls}-container-main-left-label-required`}>*</Text>
              ) : null}
              {icon ? (
                <Icon type={icon} size="32px" style={{ marginRight: '10px' }} color="#333" />
              ) : null}
              {label ? (
                <Text className={`${prefixCls}-container-main-left-label-value`} style={labelStyle}>
                  {label}
                </Text>
              ) : null}
            </View>
          </View>
          <View className={`${prefixCls}-container-main-right`}>
            <View className={`${prefixCls}-container-main-right-value`} style={valueStyle}>
              {children || children === 0 ? children : defaultNullValue}
            </View>
            {arrow ? <Icon type="right" style={{ marginLeft: '10px' }} color="#666" /> : null}
          </View>
        </View>
        {description ? (
          <View className={`${prefixCls}-container-description`}>{description}</View>
        ) : null}
      </View>
      {border ? <View className={`${prefixCls}-border`} /> : null}
    </View>
  );
};

export interface CellProps extends CellPureProps {
  options?: any[];
  [propName: string]: any;
}

const Cell: React.FC<CellProps> = (props: CellProps) => {
  const {
    label,
    border,
    required,
    icon,
    align = 'left',
    options,
    value,
    onChange,
    placeholder,
    children,
    disabled,
    field,
  } = props;

  const handleChangePicker = (e: any) => {
    if (e.detail.value < 0) {
      return;
    }
    onChange?.(options?.[e.detail.value]);
  };

  const valueIndex = options?.findIndex((item: any) => item['key'] === value) || 0;
  const selectedOption = options?.find(option => option.key === value);

  if (field === 'picker') {
    return (
      <CellPure
        label={label}
        labelStyle={{ width: '180px' }}
        border={border}
        required={required}
        icon={icon}
      >
        <Picker
          wechat-mode="selector"
          range={options}
          rangeKey="value"
          disabled={disabled}
          value={valueIndex}
          onChange={handleChangePicker}
        >
          {children ?? (
            <FormValue
              placeholder={placeholder}
              style={
                {
                  textAlign: align,
                } as React.CSSProperties
              }
            >
              {selectedOption?.value}
            </FormValue>
          )}
        </Picker>
      </CellPure>
    );
  }
  return <CellPure {...props}>{children}</CellPure>;
};

export default Cell;
