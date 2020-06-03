import * as React from 'react';
import { useMemo } from 'react';
import { View } from 'remax/one';
import Icon from '../icon';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('rate');

export interface RateProps {
  count?: number;
  label?: React.ReactNode;
  value?: number;
  readOnly?: boolean;
  icon?: string;
  iconFill?: string;
  size?: string;
  color?: string;
  onChange?: (e: any) => void;
}

const Rate = (props: RateProps) => {
  const {
    count = 5,
    label,
    value = 0,
    onChange,
    readOnly,
    icon = 'favor',
    iconFill = 'favorfill',
    size = '48px',
    color = '#FFD700',
  } = props;

  const handleClick = (index: number) => {
    if (readOnly) {
      return;
    }
    onChange?.(index + 1);
  };

  const stars = useMemo(() => {
    if (!count) {
      return [];
    }
    return [...new Array(count).keys()];
  }, [count]);

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
            {value >= index + 1 ? (
              <Icon type={iconFill} size={size} color={color} />
            ) : (
              <Icon type={icon} size={size} color="#999" />
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Rate;
