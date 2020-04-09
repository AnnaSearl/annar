/** @format */

import * as React from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('card');

export interface CardProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

const Card = (props: CardProps) => {
  const { title, extra, children, style, contentStyle } = props;
  return (
    <View className={prefixCls} style={style}>
      {title || extra ? (
        <View className={`${prefixCls}-header`}>
          <View className={`${prefixCls}-header-title`}>{title}</View>
          <View className={`${prefixCls}-header-extra`}>{extra}</View>
        </View>
      ) : null}
      <View
        className={`${prefixCls}-content`}
        style={{
          paddingTop: title || extra ? 0 : '24rpx',
          ...contentStyle,
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default Card;
