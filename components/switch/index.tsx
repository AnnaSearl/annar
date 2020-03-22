import * as React from 'react';
import classNames from 'classnames';
import { View, Checkbox } from 'remax/alipay';
import styles from './index.module.scss';


export interface SwitchProps {
  checked?: boolean;
  onChange?: (e: any) => void;
}

const Switch = (props: SwitchProps) => {

  const {
    checked,
    onChange,
  } = props;

  const handleChange = (e: any) => {
    onChange?.(e.detail.value);
  }

  return (
    <View className={styles.switch}>
      <Checkbox 
        className={classNames({
          [styles.default]: true,
          [styles.checked]: checked,
        })} 
        onChange={handleChange}
        value={checked ? "on" : "off"}
        checked={checked}
      />
      <View className={styles.checkbox}>

      </View>
    </View>
  )
};

export default Switch;
