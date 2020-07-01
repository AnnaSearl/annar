import * as React from 'react';
import { View, Text, Button } from 'remax/one';
import classNames from 'classnames';
import { tuple } from '../_util';
import Loading from '../loading';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('btn');

const ButtonTypes = tuple('default', 'primary');
export type ButtonType = typeof ButtonTypes[number];

export interface ButtonProps {
  type?: ButtonType;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
  danger?: boolean;
  shape?: string;
  block?: boolean;
  loading?: boolean;
  loadingText?: string;
  plain?: boolean;
  hairline?: boolean;
  look?: string;
  color?: string;
  onTap?: (e: any) => void;
  [restProps: string]: any;
}

const AButton = (props: ButtonProps): React.ReactElement => {
  const {
    type,
    size,
    className,
    style,
    children,
    onTap,
    disabled,
    danger,
    shape,
    block,
    loading,
    loadingText,
    plain,
    hairline,
    look,
    color,
    ...restProps
  } = props;

  const handleTap = (e: any) => {
    if (disabled) {
      return;
    }
    if (loading) {
      return;
    }
    onTap?.(e);
  };

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-primary`]: type === 'primary',
    [`${prefixCls}-plain`]: plain,
    [`${prefixCls}-hairline`]: hairline,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-danger-default`]: danger,
    [`${prefixCls}-danger`]: type === 'primary' && danger,
    [`${prefixCls}-look-${look}`]: look,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-disabled`]: disabled || loading,
  });

  return (
    <Button
      className={classes}
      disabled={disabled}
      onTap={handleTap}
      style={{
        ...style,
        color,
        borderColor: color,
      }}
      {...restProps}
    >
      {loading ? (
        <View className={`${prefixCls}-loading-icon`}>
          <Loading color="#FDFFFD" radius="36px" style={{ verticalAlign: 'text-top' }} />
        </View>
      ) : null}
      <Text>{loading && loadingText ? loadingText : children}</Text>
      <Text className={`${prefixCls}-mask`} />
    </Button>
  );
};

export default AButton;
