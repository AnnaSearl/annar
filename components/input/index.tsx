
import * as React from 'react';
import { View, Text, Input as AInput } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';
import './index.scss';


const prefixCls = getPrefixCls('input');

export interface InputProps {
  name?: string;
  type?: string;
  unit?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  className?: string;
  onChange?: (e: any) => void;
  formatFunc?: (v?: string) => any;
}

const Input = (props: InputProps) => {
  const { 
    name, 
    type, 
    value,
    className = '',
    placeholder, 
    onChange,
    disabled,
    unit,
    formatFunc,
  } = props;

  const handleChangeInput = (e: any) => {
    let currentValue = e.detail.value
    if (formatFunc) {
      currentValue = formatFunc(e.detail.value);
    }
    onChange?.(currentValue);
  }

  return (
    <View
      className={prefixCls}
      style={{height: '42rpx'}}
    >
      <View className={`${prefixCls}-main`}>
        <AInput
          className={classNames({
            [`${prefixCls}-main-input`]: true,
            [className]: true,
          })}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onInput={handleChangeInput}
          disabled={disabled}
        />
      </View>
      {
        unit ? <Text className={`${prefixCls}-unit`}>{unit}</Text> : null
      }
    </View>
  );
};

export default Input;
