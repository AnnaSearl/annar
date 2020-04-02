/** @format */

import * as React from 'react';
import { useMemo } from 'react';
import { View } from 'remax/one';
import Icon from '../icon';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('rate');

export interface RateProps {
  number?: number;
  label?: React.ReactNode;
  value?: number;
  onChange?: (e: any) => void;
}

const Rate = (props: RateProps) => {
  const { number = 5, label, value = -1, onChange } = props;

  const handleClick = (index: number) => {
    onChange?.(index);
  };

  const stars = useMemo(() => {
    if (!number) {
      return [];
    }
    return [...new Array(number).keys()];
  }, [number]);

  return (
    <View className={prefixCls}>
      {label ? <View className={`${prefixCls}-label`}>{label}</View> : null}
      <View className={`${prefixCls}-value`}>
        {stars.map((item, index) => (
          <View
            key={index}
            className={`${prefixCls}-value-star`}
            onTap={() => {
              handleClick(index);
            }}
          >
            {value >= index ? (
              <Icon type="favorfill" size="48rpx" color="#FFD700" />
            ) : (
              <Icon type="favor" size="48rpx" color="#999" />
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Rate;
