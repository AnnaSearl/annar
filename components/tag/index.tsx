import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('tag');

export interface TagProps {
  color?: string;
  plain?: boolean;
  size?: string;
  block?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onTap?: (e: any) => void;
}

const Tag = (props: TagProps): React.ReactElement => {
  const { color, plain, size, block, className, style, children, onTap } = props;

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-plain`]: plain,
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-large`]: size === 'large',
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-${color}`]: color,
    },
    className,
  );

  return (
    <View className={classes} style={style} onTap={onTap}>
      {children}
    </View>
  );
};

export interface CheckableTagProps extends TagProps {
  checked?: boolean;
  checkedColor?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
}

Tag.CheckableTag = (props: CheckableTagProps) => {
  const { className, checked, checkedColor, style = {}, disabled, onChange, children } = props;
  const { height } = style;
  let tagHeight = height;
  if (typeof height === 'string') {
    if (height.includes('px')) {
      tagHeight = Number(height.slice(0, -2));
    } else {
      tagHeight = Number(height);
    }
  }
  let tagStyle = undefined;
  if (height) {
    tagStyle = {
      ...style,
      lineHeight: `${(tagHeight as number) - 4}px`,
    };
  }

  const handleChange = () => {
    if (disabled) {
      return;
    }
    onChange?.(!checked);
  };

  return (
    <Tag
      size="large"
      {...props}
      className={classNames(
        {
          [`${prefixCls}-checkable`]: true,
          [`${prefixCls}-checked`]: checked,
          [`${prefixCls}-${checkedColor}`]: checked && checkedColor,
          [`${prefixCls}-disabled`]: disabled,
        },
        className,
      )}
      style={tagStyle}
      onTap={handleChange}
    >
      {children}
    </Tag>
  );
};

export default Tag;
