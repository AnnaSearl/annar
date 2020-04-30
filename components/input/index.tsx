/** @format */

import * as React from 'react';
import { Input as AInput } from 'remax/one';
import classNames from 'classnames';
import Cell from '../cell';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('input');

export interface InputProps {
  label?: React.ReactNode;
  name?: string;
  type?: 'text' | 'number';
  unit?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  inputAlign?: string;
  icon?: string;
  disabled?: boolean;
  border?: boolean;
  required?: boolean;
  onChange?: (e: any) => void;
  formatFunc?: (v?: string) => any;
}

const Input = (props: InputProps) => {
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
    formatFunc,
    required,
    icon,
  } = props;

  const handleChangeInput = (e: any) => {
    let currentValue = e.detail.value;
    if (formatFunc) {
      currentValue = formatFunc(e.detail.value);
    }
    onChange?.(currentValue);
  };

  return (
    <Cell
      label={label}
      labelStyle={{ width: '180px' }}
      border={border}
      required={required}
      icon={icon}
      field
    >
      <AInput
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
      />
    </Cell>
  );
};

export default Input;
