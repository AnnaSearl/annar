import * as React from 'react';
import { View, Textarea } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('textarea');

export interface TextareaProps {
  className?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  maxlength?: number;
  focus?: boolean;
  autoHeight?: boolean;
  showCount?: boolean;
  controlled?: boolean;
  rows?: number;
  onChange?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onConfirm?: (e: any) => void;
}

const ATextarea = (props: TextareaProps) => {
  const {
    className = '',
    name,
    value,
    placeholder,
    disabled,
    maxlength,
    focus,
    autoHeight,
    showCount,
    rows = 3,
    controlled = false,
    onChange,
    onFocus,
    onBlur,
    onConfirm,
  } = props;

  const handleChangeInput = (e: any) => {
    onChange?.(e);
  };

  return (
    <View className={prefixCls}>
      <Textarea
        className={classNames({
          [`${prefixCls}-default`]: true,
          [className]: true,
        })}
        // @ts-ignore
        placeholderClass={`${prefixCls}-placeholder`}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        maxlength={maxlength}
        focus={focus}
        autoHeight={autoHeight}
        showCount={showCount}
        controlled={controlled}
        onInput={handleChangeInput}
        onFocus={onFocus}
        onBlur={onBlur}
        onConfirm={onConfirm}
        rows={rows}
      />
    </View>
  );
};

export default ATextarea;
