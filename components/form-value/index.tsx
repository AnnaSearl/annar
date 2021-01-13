import * as React from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('form-value');

export interface ValueProps {
  placeholder?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  textAlign?: 'left' | 'right' | 'center';
  onTap?: (e: any) => void;
}

const Value = (props: ValueProps) => {
  const { placeholder, style, textAlign, children, onTap } = props;

  return (
    <View className={prefixCls} style={{ ...style, textAlign }} onTap={onTap}>
      {children || children === 0 ? (
        children
      ) : (
        <View className={`${prefixCls}-placeholder`}>{placeholder}</View>
      )}
    </View>
  );
};

export default Value;
