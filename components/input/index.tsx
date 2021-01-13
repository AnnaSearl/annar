import * as React from 'react';
import { Input, View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('input');

export interface InputProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  type?: 'text' | 'number' | 'idcard' | 'digit' | 'password';
  size?: 'large' | 'middle' | 'small';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  placeholderStyle?: React.CSSProperties;
  align?: string;
  disabled?: boolean;
  maxLength?: number;
  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
}

const AnnarInput = (props: InputProps) => {
  const {
    name,
    type = 'text',
    size,
    value,
    defaultValue,
    prefix,
    suffix,
    className,
    style,
    inputStyle,
    placeholderStyle,
    align,
    placeholder,
    disabled,
    maxLength,
    onChange,
    onFocus,
    onBlur,
  } = props;

  const _type = type === 'password' ? 'text' : type;

  const inputElement = (
    <Input
      className={classNames(prefixCls, {
        [`${prefixCls}-align-${align}`]: align,
      })}
      style={inputStyle}
      placeholderStyle={{ color: '#bfbfbf', ...placeholderStyle }}
      name={name}
      // @ts-ignore
      type={_type}
      password={type === 'password'}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      onInput={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );

  return (
    <View
      className={classNames(
        `${prefixCls}-wrapper`,
        { [`${prefixCls}-wrapper-${size}`]: size },
        className,
      )}
      style={style}
    >
      <View className={`${prefixCls}-prefix`}>{prefix}</View>
      {inputElement}
      <View className={`${prefixCls}-suffix`}>{suffix}</View>
    </View>
  );
};

export default AnnarInput;
