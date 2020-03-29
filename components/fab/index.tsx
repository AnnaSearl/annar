/** @format */

import * as React from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('fab');

export interface FabProps {
  onTap?: () => void;
  children?: React.ReactNode;
}

const Fab = (props: FabProps) => {
  const { onTap, children } = props;

  return (
    <View className={prefixCls} onTap={onTap}>
      {children}
    </View>
  );
};

export default Fab;
