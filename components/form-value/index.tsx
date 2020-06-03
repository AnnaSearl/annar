import * as React from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('form-value');

export interface ValueProps {
  placeholder?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Value = (props: ValueProps) => {
  const { placeholder, style, children } = props;

  return (
    <View className={prefixCls} style={style}>
      {children || children === 0 ? (
        children
      ) : (
        <View className={`${prefixCls}-placeholder`}>{placeholder}</View>
      )}
    </View>
  );
};

export default Value;
