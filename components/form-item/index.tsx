/** @format */

import * as React from 'react';
import classNames from 'classnames';
import { View, Text } from 'remax/one';
import Icon from '../icon';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('form_item');

export interface ItemProps {
  reqiured?: boolean;
  unline?: boolean;
  arrow?: boolean;
  className?: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  label?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => any;
  verticality?: boolean;
}

const Item = (props: ItemProps) => {
  const {
    label,
    unline,
    onClick,
    reqiured,
    className = '',
    style,
    labelStyle,
    children,
    arrow,
    verticality,
  } = props;

  if (verticality) {
    return (
      <View
        className={classNames({
          [prefixCls]: true,
          [className]: true,
        })}
        style={style}
      >
        <View className={`${prefixCls}-verticality`}>
          <View className={`${prefixCls}-verticality-label`} style={labelStyle}>
            {reqiured ? <Text className={`${prefixCls}-verticality-label-required`}>*</Text> : null}
            <Text>{label}</Text>
          </View>
          <View onTap={onClick} className={`${prefixCls}-verticality-value`}>
            {children}
          </View>
        </View>
        {unline ? null : <View className={`${prefixCls}-unline`} />}
      </View>
    );
  }

  return (
    <View
      className={classNames({
        [prefixCls]: true,
        [className]: true,
      })}
      style={style}
    >
      <View className={`${prefixCls}-item`}>
        <Text className={`${prefixCls}-item-label`} style={labelStyle}>
          {reqiured ? <Text className={`${prefixCls}-item-label-required`}>*</Text> : null}
          <Text>{label}</Text>
        </Text>
        <View onTap={onClick} className={`${prefixCls}-item-value`}>
          {children}
        </View>
        {arrow ? (
          <Text className={`${prefixCls}-item-value-arrow`}>
            <Icon type="right" size="28rpx" color="#666" />
          </Text>
        ) : null}
      </View>
      {unline ? null : <View className={`${prefixCls}-unline`} />}
    </View>
  );
};

export default Item;
