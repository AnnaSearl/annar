import * as React from 'react';
import { Input } from 'remax/one';
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
  } = props;

  const handleChangeInput = (e: any) => {
    onChange?.(e);
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
      />
    </Cell>
  );
};

export default AInput;
