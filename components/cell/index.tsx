/** @format */

import * as React from 'react';
import { View, Text } from 'remax/one';
import Icon from '../icon';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('cell');

export interface ItemProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  description?: React.ReactNode;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  valueStyle?: React.CSSProperties;
  verticality?: boolean;
  icon?: string;
  required?: boolean;
  border?: boolean;
  arrow?: boolean;
  defaultNullValue?: string;
  onTap?: () => void;
}

const Cell = (props: ItemProps) => {
  const {
    label,
    style,
    labelStyle,
    valueStyle,
    children,
    description,
    verticality,
    icon,
    border = true,
    arrow,
    required,
    defaultNullValue = '',
    onTap,
  } = props;

  if (verticality) {
    return (
      <View className={prefixCls} style={style} onTap={onTap}>
        <View className={`${prefixCls}-verticality`}>
          {label ? (
            <View className={`${prefixCls}-verticality-label`} style={labelStyle}>
              {label}
            </View>
          ) : null}
          <View className={`${prefixCls}-verticality-value`} style={valueStyle}>
            {children}
          </View>
        </View>
      </View>
    );
  }

  return (
    <View className={prefixCls} style={style} onTap={onTap}>
      <View className={`${prefixCls}-container`}>
        <View className={`${prefixCls}-container-left`}>
          <View className={`${prefixCls}-container-left-label`} style={labelStyle}>
            {required ? (
              <Text className={`${prefixCls}-container-left-label-required`}>*</Text>
            ) : null}
            {icon ? <Icon type={icon} style={{ marginRight: '10rpx' }} color="#333" /> : null}
            <Text>{label}</Text>
          </View>
          {description ? (
            <View className={`${prefixCls}-container-left-description`}>{description}</View>
          ) : null}
        </View>
        <View className={`${prefixCls}-container-value`} style={valueStyle}>
          <Text>{children || children === 0 ? children : defaultNullValue}</Text>
          {arrow ? <Icon type="right" style={{ marginLeft: '10rpx' }} color="#666" /> : null}
        </View>
      </View>
      {border ? <View className={`${prefixCls}-border`} /> : null}
    </View>
  );
};

export default Cell;
