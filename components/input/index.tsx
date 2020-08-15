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
  button?: React.ReactNode;
  maxLength?: number;
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
    button,
    maxLength,
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
      label={label}
      labelStyle={{ width: '180px' }}
      border={border}
      required={required}
      icon={icon}
      field
    >
      <View className={`${prefixCls}-body`}>
        {inputElement}
        {button && <View className={`${prefixCls}-button`}>{button}</View>}
      </View>
    </Cell>
  );
};

export default AInput;
