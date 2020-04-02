/** @format */

import * as React from 'react';
import { View, Text } from 'remax/one';
import { ScrollView } from '../one/base';
import { getPrefixCls } from '../common';
import './item.scss';

const prefixCls = getPrefixCls('filter-item');

export interface ItemProps {
  open?: boolean;
  label?: string;
  height?: string;
  onClick?: (open: boolean) => void;
  children?: React.ReactNode;
}

const Item = (props: ItemProps) => {
  const { open, label, height, onClick, children } = props;

  const handleClick = () => {
    onClick?.(!open);
  };

  return (
    <View className={prefixCls}>
      <View className={`${prefixCls}-label`} onTap={handleClick}>
        <Text className={`${prefixCls}-label-text`}>{label}</Text>
        {open ? (
          <View className={`${prefixCls}-label-chevronUp`} />
        ) : (
          <View className={`${prefixCls}-label-chevronDown`} />
        )}
      </View>
      <ScrollView
        scrollY
        className={`${prefixCls}-value`}
        style={{
          height: open ? height : 0,
        }}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default Item;
