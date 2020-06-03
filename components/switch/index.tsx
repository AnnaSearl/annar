import * as React from 'react';
import classNames from 'classnames';
import { View } from 'remax/one';
import { Checkbox } from '../one';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('switch');

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  small?: boolean;
  onChange?: (e: any) => void;
}

const Switch = (props: SwitchProps) => {
  const { checked, disabled, small, onChange } = props;

  const handleChange = () => {
    if (disabled) {
      return;
    }
    onChange?.(!checked);
  };

  return (
    <View className={prefixCls} onTap={handleChange}>
      <Checkbox
        className={classNames({
          [`${prefixCls}-default`]: true,
          [`${prefixCls}-checked`]: !small && checked,
          [`${prefixCls}-checked-small`]: small && checked,
          [`${prefixCls}-disabled`]: disabled,
        })}
        // onChange={handleChange}
        value={checked ? 'on' : 'off'}
        checked={checked}
      />
      <View
        className={classNames(`${prefixCls}-checkbox`, {
          [`${prefixCls}-checkbox-small`]: small,
          [`${prefixCls}-checkbox-disabled`]: disabled,
        })}
      />
    </View>
  );
};

export default Switch;
