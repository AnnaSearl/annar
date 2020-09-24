import * as React from 'react';
import { Text } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('icon');

export interface IconProps {
  type?: string;
  color?: string;
  size?: string | number;
  style?: React.CSSProperties;
}

const Icon = (props: IconProps) => {
  const { type, color, size, style } = props;

  let fontSize = '28px';
  if (size) {
    if (typeof size === 'string') {
      fontSize = size;
    }
    if (typeof size === 'number') {
      fontSize = size + 'px';
    }
  }

  return (
    <Text
      className={classNames({
        [prefixCls]: true,
        iconfont: true,
        [`icon-${type}`]: true,
      })}
      style={{
        ...style,
        color,
        fontSize,
      }}
    />
  );
};

export default Icon;
