import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('tag');

export interface TagProps {
  color?: string;
  size?: string;
  block?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onTap?: () => void;
}

const Tag = (props: TagProps): React.ReactElement => {
  const { color, size, className = '', style, children, onTap } = props;

  const classes = classNames({
    [prefixCls]: true,
    [`${prefixCls}-small`]: size === 'small',
    [`${prefixCls}-large`]: size === 'large',
    [`${prefixCls}-block`]: size === 'block',
    [`${prefixCls}-${color}`]: color,
    [className]: true,
  });

  return (
    <View className={classes} style={style} onTap={onTap}>
      {children}
    </View>
  );
};

export interface CheckableTagProps {
  className?: string;
  checked?: boolean;
  checkedColor?: boolean;
  disabled?: boolean;
  onChange?: (e: any) => void;
  children?: React.ReactNode;
}

Tag.CheckableTag = (props: CheckableTagProps) => {
  const { className = '', checked, checkedColor, disabled, onChange, children } = props;

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
      className={classNames({
        [`${prefixCls}-checkable`]: true,
        [`${prefixCls}-checked`]: checked,
        [`${prefixCls}-${checkedColor}`]: checked && checkedColor,
        [`${prefixCls}-disabled`]: disabled,
        [className]: true,
      })}
      onTap={handleChange}
    >
      {children}
    </Tag>
  );
};

export default Tag;
