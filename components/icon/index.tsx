import * as React from 'react';
import { Text } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('icon');

export interface IconProps {
  type?: string;
  color?: string;
  size?: string;
  style?: React.CSSProperties;
}

const Icon = (props: IconProps) => {
  const { type, color, size, style } = props;

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
        fontSize: size ? size : '28px',
      }}
    />
  );
};

export default Icon;
