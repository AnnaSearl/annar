
import * as React from 'react';
import { View, Text, Input as AInput } from 'remax/alipay';
import classNames from 'classnames';
import styles from './index.module.scss';


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
  controlled?: boolean;
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
    controlled = false,
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
      className={styles.input}
      style={{height: '42rpx'}}
    >
      <View className={styles.main}>
        <AInput
          className={classNames({
            [styles.aInput]: true,
            [className]: true,
          })}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onInput={handleChangeInput}
          disabled={disabled}
          controlled={controlled}
        />
      </View>
      {
        unit ? <Text className={styles.unit}>{unit}</Text> : null
      }
    </View>
  );
};

export default Input;
