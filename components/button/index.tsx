/** @format */

import * as React from 'react';
import { View, Text } from 'remax/one';
import classNames from 'classnames';
import { tuple } from '../_util';
import Loading from '../loading';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('button');

const ButtonTypes = tuple('default', 'primary', 'simple');
export type ButtonType = typeof ButtonTypes[number];

export interface ButtonProps {
  type?: ButtonType;
  size?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
  danger?: boolean;
  square?: boolean;
  block?: boolean;
  loading?: boolean;
  loadingText?: string;
  plain?: boolean;
  onTap?: () => void;
}

const Button = (props: ButtonProps): React.ReactElement => {
  const {
    type,
    size,
    style,
    children,
    onTap,
    disabled,
    danger,
    square,
    block,
    loading,
    loadingText,
    plain,
  } = props;

  const handleClick = () => {
    if (disabled) {
      return;
    }
    if (loading) {
      return;
    }
    onTap?.();
  };

  return (
    <View
      className={classNames({
        [prefixCls]: true,
        [`${prefixCls}-square`]: square,
        [`${prefixCls}-small`]: size === 'small',
        [`${prefixCls}-large`]: size === 'large',
        [`${prefixCls}-superlarge`]: size === 'superlarge',
        [`${prefixCls}-primary`]: type === 'primary',
        [`${prefixCls}-plain`]: plain,
        [`${prefixCls}-danger-default`]: danger,
        [`${prefixCls}-danger`]: type === 'primary' && danger,
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-disabled`]: disabled,
      })}
      onTap={handleClick}
      style={style}
    >
      {loading ? (
        <View className={`${prefixCls}-loading-icon`}>
          <Loading color="#FDFFFD" radius="36rpx" style={{ verticalAlign: 'text-top' }} />
        </View>
      ) : null}
      <Text>{loading && loadingText ? loadingText : children}</Text>
    </View>
  );
};

export default Button;
