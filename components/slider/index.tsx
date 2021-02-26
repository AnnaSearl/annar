import React, { useState, useEffect } from 'react';
import { View } from 'remax/one';
import { createSelectorQuery } from '../one';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('slider');

export interface SliderProps {
  // 设置初始取值。
  defaultValue?: number;
  // 值为 true 时，滑块为禁用状态
  disabled?: boolean;
  // 最大值
  max?: number;
  // 最小值
  min?: number;
  // 设置当前取值
  value?: number;
  // 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入
  onChange?: (value: number) => void;
}

const Slider = (props: SliderProps) => {
  const { defaultValue = 0, disabled = false, max = 100, min = 0, value = 0, onChange } = props;
  const [rectW, setRectW] = useState(0);
  const [step, setStep] = useState(defaultValue);
  const [startX, setStartX] = useState(0);
  useEffect(() => {
    const handleSliderWidth = () => {
      createSelectorQuery()
        // @ts-ignore
        .select(`.${prefixCls}`)
        .boundingClientRect()
        .exec((rect: any) => {
          const w = Array.isArray(rect) ? rect?.[0]?.width : rect?.width;
          const x = Array.isArray(rect) ? rect?.[0]?.x : rect?.x;
          setRectW(w);
          setStartX(x);
        });
    };
    handleSliderWidth();
  }, []);
  useEffect(() => {
    setStep(value);
  }, [value]);
  const getStepValues = (step: number) => {
    if (step < 0) {
      return 0;
    } else if (step > 100) {
      return 100;
    }
    return step;
  };
  const setStepValues = (x: number) => {
    if (!disabled) {
      const offsetX = x - startX;
      const percent = offsetX / rectW;
      const stepValue = Math.round(percent * 100);
      setStep(getStepValues(stepValue));
      onChange && onChange(((max - min) * stepValue) / 100);
    }
  };
  return (
    <View className={`${prefixCls}`}>
      <View className={`${prefixCls}-rail`}></View>
      <View
        className={`${prefixCls}-track`}
        style={{
          width: `${step}%`,
        }}
      ></View>
      <View
        className={`${prefixCls}-handle`}
        style={{
          left: `${step}%`,
        }}
        onTouchMove={e => setStepValues(e.touches[0].clientX)}
      ></View>
    </View>
  );
};

export default Slider;
