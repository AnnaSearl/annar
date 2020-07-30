import * as React from 'react';
import { View, Input } from 'remax/one';
import classNames from 'classnames';
import Icon from '../icon';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('stepper');

export interface StepperProps {
  value?: number;
  step?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  plain?: boolean;
  shape?: string;
  size?: string;
  color?: string;
  bgColor?: string;
  onChange?: (v?: number, e?: Event) => void;
  onInput?: (v?: number, e?: Event) => void;
  onTap?: (v?: number, e?: Event) => void;
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
    size,
    color,
    bgColor,
    onChange,
    onInput,
    onTap,
    onFocus,
    onBlur,
  } = props;

  const val = value;
  const minusDisabled = val <= min || disabled;
  const plusDisabled = ((max || max === 0) && val >= max) || disabled;

  const handlePlus = () => {
    if (!val && val !== 0) {
      return;
    }
    if (plusDisabled) {
      return;
    }
    const newValue = max && val + step > max ? max : val + step;
    onTap?.(newValue);
    onChange?.(newValue);
  };

  const handleMinus = () => {
    if (!val && val !== 0) {
      return;
    }
    if (minusDisabled) {
      return;
    }
    const newValue = val - step < min ? min : val - step;
    onTap?.(newValue);
    onChange?.(newValue);
  };

  const handleInput = (e: any) => {
    onInput?.(Number(e.target.value), e);
    onChange?.(Number(e.target.value), e);
  };

  const handleFocus = (e: any) => {
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    onBlur?.(e);
    if (minusDisabled) {
      onInput?.(min);
      onChange?.(min);
    }
    if (plusDisabled) {
      onInput?.(max);
      onChange?.(max);
    }
  };

  return (
    <View
      className={classNames(prefixCls, {
        [`${prefixCls}-${size}`]: size,
      })}
    >
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
