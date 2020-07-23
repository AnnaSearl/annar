import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('col');

export interface ColProps {
  span?: number;
  offset?: number;
  flex?: string | number;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const Col = (props: ColProps) => {
  const { span, offset = 0, flex, style, className, children } = props;

  return (
    <View
      className={classNames(
        prefixCls,
        {
          [`${prefixCls}-${span}`]: span,
          [`${prefixCls}-offset-${offset}`]: offset,
        },
        className,
      )}
      style={{
        flex,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default Col;
