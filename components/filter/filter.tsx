/** @format */

import * as React from 'react';
import { View } from 'remax/one';
import Mask from '../mask';
import { getPrefixCls } from '../common';
import './filter.scss';

const prefixCls = getPrefixCls('filter');

export interface FilterProps {
  showMask?: boolean;
  onClickMask?: () => void;
  children?: React.ReactNode;
}

const Filter = (props: FilterProps) => {
  const { showMask, onClickMask, children } = props;

  return (
    <View className={prefixCls}>
      <View className={`${prefixCls}-items`}>{children}</View>
      <Mask
        show={showMask}
        onTap={onClickMask}
        style={{
          top: 'unset',
          bottom: 'unset',
          height: '100%',
        }}
      />
    </View>
  );
};

export default Filter;

// {/* mask必须放到items的后面,否则会导致动画transition失效 */}
