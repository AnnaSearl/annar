/** @format */

import * as React from 'react';
import { View } from 'remax/one';
import Icon from '../icon';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('dropdown');

export interface OptionProps {
  key: string;
  value: string;
}

export interface DropdownProps {
  options?: OptionProps[];
  value?: string;
  activeColor?: string;
  onChange?: (e: OptionProps) => void;
}

const Dropdown = (props: DropdownProps) => {
  const { options = [], value, activeColor = '#1890FF', onChange } = props;

  return (
    <View className={prefixCls}>
      <View className={`${prefixCls}-content`}>
        {options.map(item => (
          <View
            className={`${prefixCls}-content-option`}
            key={item.key}
            onTap={() => onChange?.(item)}
            style={
              item.key === value
                ? {
                    color: activeColor,
                    borderBottom: `1px solid ${activeColor}`,
                  }
                : undefined
            }
          >
            {item.value}
            {item.key === value ? (
              <View className={`${prefixCls}-content-option-check`}>
                <Icon type="check" size="28px" color={activeColor} />
              </View>
            ) : null}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Dropdown;
