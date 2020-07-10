import * as React from 'react';
import { View, Input } from 'remax/one';
import classNames from 'classnames';
import Icon from '../icon';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('stepper');

const getDefaultValue = (value: number, min: number, max: number) => {
  if (value <= min) {
    return min;
  }
  if (value >= max) {
    return max;
  }
  return value;
};

export interface StepperProps {
  value?: string | number;
  step?: string | number;
  min?: string | number;
  max?: string | number;
  disabled?: boolean;
  plain?: boolean;
  shape?: string;
  color?: string;
  bgColor?: string;
  onChange?: (v: number, e?: Event) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
}

const Stepper = (props: StepperProps) => {
  const {
    min = 1,
    max,
    step = 1,
    value = min,
    disabled,
    plain,
    shape,
    color,
    bgColor,
    onChange,
    onFocus,
    onBlur,
  } = props;

  const stepNum = Number(step);
  const minNum = Number(min);
  const maxNum = Number(max);
  const val = getDefaultValue(Number(value), minNum, maxNum);
  const minusDisabled = val <= minNum || disabled;
  const plusDisabled = ((maxNum || maxNum === 0) && val >= maxNum) || disabled;

  const handlePlus = () => {
    if (!val && val !== 0) {
      return;
    }
    if (plusDisabled) {
      return;
    }
    const newValue = val + stepNum > maxNum ? maxNum : val + stepNum;
    onChange?.(newValue);
  };

  const handleMinus = () => {
    if (!val && val !== 0) {
      return;
    }
    if (minusDisabled) {
      return;
    }
    const newValue = val - stepNum < minNum ? minNum : val - stepNum;
    onChange?.(newValue);
  };

  const handleInput = (e: any) => {
    onChange?.(Number(e.target.value), e);
  };

  const handleFocus = (e: any) => {
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    onBlur?.(e);
    if (minusDisabled) {
      onChange?.(minNum);
    }
    if (plusDisabled) {
      onChange?.(maxNum);
    }
  };

  return (
    <View className={prefixCls}>
      <View
        className={classNames(`${prefixCls}-btn`, `${prefixCls}-minus`, {
          [`${prefixCls}-btn-disabled`]: minusDisabled,
          [`${prefixCls}-btn-plain`]: plain,
          [`${prefixCls}-btn-plain-disabled`]: plain && minusDisabled,
          [`${prefixCls}-btn-circle`]: shape === 'circle',
        })}
        onTap={handleMinus}
      >
        <Icon type="move" size="36px" color="#999" />
      </View>
      <View className={`${prefixCls}-input-wrapper`}>
        <Input
          className={classNames(`${prefixCls}-input`, {
            [`${prefixCls}-input-disabled`]: disabled,
            [`${prefixCls}-input-circle`]: shape === 'circle',
            [`${prefixCls}-input-plain`]: plain,
            [`${prefixCls}-binputtn-plain-disabled`]: plain && disabled,
          })}
          type="number"
          value={String(val)}
          onInput={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
        />
      </View>
      <View
        className={classNames(`${prefixCls}-btn`, `${prefixCls}-plus`, {
          [`${prefixCls}-btn-disabled`]: plusDisabled,
          [`${prefixCls}-btn-plain`]: plain,
          [`${prefixCls}-btn-plain-disabled`]: plain && plusDisabled,
          [`${prefixCls}-btn-circle`]: shape === 'circle',
        })}
        style={{
          borderColor: bgColor || color,
          backgroundColor: bgColor,
          opacity: plusDisabled && bgColor ? 0.4 : undefined,
        }}
        onTap={handlePlus}
      >
        <Icon type="add" size="36px" color={color || '#333'} />
      </View>
    </View>
  );
};

export default Stepper;
