import * as React from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('loading');

export interface LoadingProps {
  type?: string;
  color?: string;
  gapColor?: string;
  radius?: string;
  style?: React.CSSProperties;
}

const Loading = (props: LoadingProps) => {
  const { style, type, color = '#999', gapColor = '#FDFFFD', radius = '42px' } = props;

  if (type === 'gap') {
    return (
      <View
        className={`${prefixCls}-gap`}
        style={{
          height: radius,
          width: radius,
          border: `2px solid ${color}`,
        }}
      >
        <View
          className={`${prefixCls}-gap-fill`}
          style={{
            backgroundColor: gapColor,
          }}
        />
      </View>
    );
  }
  if (type === 'wave') {
    return (
      <View className={`${prefixCls}-wave`}>
        <View style={{ backgroundColor: color }} />
        <View style={{ backgroundColor: color }} />
        <View style={{ backgroundColor: color }} />
        <View style={{ backgroundColor: color }} />
        <View style={{ backgroundColor: color }} />
      </View>
    );
  }
  if (type === 'anna') {
    return (
      <View className={`${prefixCls}-anna`}>
        <View style={{ backgroundColor: color }} />
        <View style={{ backgroundColor: color }} />
        <View style={{ backgroundColor: color }} />
      </View>
    );
  }
  return (
    <View
      className={prefixCls}
      style={{
        ...style,
        height: radius,
        width: radius,
        borderColor: `${color} ${color} transparent`,
      }}
    />
  );
};

export default Loading;
