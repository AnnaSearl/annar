import * as React from 'react';
import { View, Text, Button } from 'remax/one';
import classNames from 'classnames';
import { tuple } from '../_util';
import Loading from '../loading';
import Icon from '../icon';
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
  float?: boolean | string;
  loading?: boolean;
  loadingText?: string;
  plain?: boolean;
  hairline?: boolean;
  look?: string;
  color?: string;
  icon?: string | React.ReactNode;
  ghost?: boolean;
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
    float,
    loading,
    loadingText,
    plain,
    hairline,
    look,
    color,
    icon,
    ghost,
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

  const renderIcon = (childrenElement: any) => {
    let iconSize = '32px';
    if (size === 'small') {
      iconSize = '28px';
    }
    if (size === 'large') {
      iconSize = '36px';
    }
    let iconColor = '#1890FF';
    if (type === 'primary') {
      iconColor = '#FDFFFD';
    }
    if (plain) {
      if (type === 'primary') {
        iconColor = '#1890FF';
      }
      if (color) {
        iconColor = color;
      }
    }
    if (typeof icon === 'string') {
      return (
        <Icon
          type={icon}
          color={iconColor}
          size={iconSize}
          style={{ verticalAlign: '-0.05em', marginRight: childrenElement ? '6px' : undefined }}
        />
      );
    }
    if (React.isValidElement(icon)) {
      return {
        ...icon,
        props: {
          ...icon?.props,
          style: {
            verticalAlign: '-0.05em',
            marginRight: childrenElement ? '6px' : undefined,
            ...icon?.props?.style,
          },
        },
      };
    }
    return null;
  };

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-primary`]: type === 'primary',
    [`${prefixCls}-ghost`]: ghost,
    [`${prefixCls}-plain`]: plain,
    [`${prefixCls}-hairline`]: hairline,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-float`]: float,
    [`${prefixCls}-float-${float}`]: float,
    [`${prefixCls}-danger-default`]: danger,
    [`${prefixCls}-danger`]: type === 'primary' && danger,
    [`${prefixCls}-look-${look}`]: look,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-disabled`]: disabled || loading,
  });

  const childrenElement = loading && loadingText ? loadingText : children;
  const iconElement = renderIcon(childrenElement);

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
          <Loading color="#FDFFFD" radius="36px" style={{ verticalAlign: '-0.3em' }} />
        </View>
      ) : (
        iconElement
      )}
      <Text className={`${prefixCls}-text`}>{childrenElement}</Text>
      <Text className={`${prefixCls}-mask`} />
    </Button>
  );
};

export default AButton;
