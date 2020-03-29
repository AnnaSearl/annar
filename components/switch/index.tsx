/** @format */

import * as React from 'react';
import classNames from 'classnames';
import { View, Checkbox } from 'remax/alipay';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('switch');

export interface SwitchProps {
  checked?: boolean;
  onChange?: (e: any) => void;
}

const Switch = (props: SwitchProps) => {
  const { checked, onChange } = props;

  const handleChange = (e: any) => {
    onChange?.(e.detail.value);
  };

  return (
    <View className={prefixCls}>
      <Checkbox
        className={classNames({
          [`${prefixCls}-default`]: true,
          [`${prefixCls}-checked`]: checked,
        })}
        onChange={handleChange}
        value={checked ? 'on' : 'off'}
        checked={checked}
      />
      <View className={`${prefixCls}-checkbox`} />
    </View>
  );
};

export default Switch;
