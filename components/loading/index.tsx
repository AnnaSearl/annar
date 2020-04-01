/** @format */

import * as React from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('loading');

export interface LoadingProps {
  type?: string;
  color?: string;
  gapColor?: string;
  radius?: string;
  style?: React.CSSProperties;
}

const Loading = (props: LoadingProps) => {
  const { style, type, color = '#999', gapColor = '#FDFFFD', radius = '42rpx' } = props;

  if (type === 'gap') {
    return (
      <View
        className={`${prefixCls}_gap`}
        style={{
          height: radius,
          width: radius,
          border: `2rpx solid ${color}`,
        }}
      >
        <View
          className={`${prefixCls}_gap-gap`}
          style={{
            backgroundColor: gapColor,
          }}
        />
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
