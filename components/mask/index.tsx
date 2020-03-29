/** @format */

import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('mask');

export interface MaskProps {
  show?: boolean;
  onTap?: () => void;
  zIndex?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Mask = (props: MaskProps): React.ReactElement => {
  const { show, onTap, zIndex, style, children } = props;

  return (
    <View
      className={classNames({
        [prefixCls]: true,
        [`${prefixCls}_active`]: show,
      })}
      style={{
        ...style,
        zIndex: zIndex,
      }}
      onTap={onTap}>
      {children}
    </View>
  );
};

export default Mask;
