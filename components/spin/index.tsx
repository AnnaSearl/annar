import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('spin');

export interface SpinProps {
  loading?: boolean;
  children?: React.ReactNode;
  className?: any;
  style?: React.CSSProperties;
}

const Spin = (props: SpinProps) => {
  const { loading, children, className, style } = props;

  return (
    <View
      className={classNames({
        [prefixCls]: true,
        [className]: true,
      })}
      style={{
        ...style,
      }}
    >
      {loading ? (
        <View className={`${prefixCls}-loading`} />
      ) : (
        <View className={`${prefixCls}-default`} />
      )}
      <View>{children}</View>
    </View>
  );
};

export default Spin;
