import * as React from 'react';
import { Input, View } from 'remax/one';
import classNames from 'classnames';
import Cell from '../cell';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('input');

export interface InputProps {
  label?: React.ReactNode;
  name?: string;
  type?: 'text' | 'number';
  placeholder?: string;
  value?: string;
  className?: string;
  inputAlign?: string;
  icon?: string;
  disabled?: boolean;
  border?: boolean;
  required?: boolean;
  extra?: React.ReactNode;
  maxLength?: number;
  cellStyle?: React.CSSProperties;
  onChange?: (e: any) => void;
}

const AInput = (props: InputProps) => {
  const {
    label,
    name,
    type,
    value,
    className = '',
    inputAlign,
    placeholder,
    onChange,
    disabled,
    border = true,
    required,
    icon,
    extra,
    maxLength,
    cellStyle,
  } = props;

  const handleChangeInput = (e: any) => {
    onChange?.(e);
  };

  const inputElement = (
    <Input
      className={classNames({
        [prefixCls]: true,
        [`${prefixCls}-align-right`]: inputAlign === 'right',
        [`${prefixCls}-align-center`]: inputAlign === 'center',
        [className]: true,
      })}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onInput={handleChangeInput}
      disabled={disabled}
      maxLength={maxLength}
    />
  );

  return (
    <Cell
      style={cellStyle}
      label={label}
      labelStyle={{ width: '180px' }}
      border={border}
      required={required}
      icon={icon}
      field
    >
      <View className={`${prefixCls}-container`}>
        {inputElement}
        {extra && <View className={`${prefixCls}-extra`}>{extra}</View>}
      </View>
    </Cell>
  );
};

export default AInput;
