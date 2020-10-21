import React, { useState, useEffect } from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('picker-view-column');

const heightUnit = 44;

export interface OptionObjProps {
  [propName: string]: string;
}

type OptionProps = string | OptionObjProps;

export interface PickerViewColumnProps {
  value?: number;
  options?: OptionProps[];
  optionsKey?: string;
  children?: React.ReactNode;
  onChange?: (value: number) => void;
}

const PickerViewColumn: React.FC<PickerViewColumnProps> = (props: PickerViewColumnProps) => {
  const { value = 0, options = [], optionsKey = 'text', onChange } = props;

  const [initial, setInitial] = useState(heightUnit * 2);
  const [start, setStart] = useState(0);
  const [y, setY] = useState(initial);
  const [columnHeight, setColumnHeight] = useState(0);
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    setColumnHeight(options.length * heightUnit);
  }, [options]);

  useEffect(() => {
    if (!value || value <= 0) {
      setY(heightUnit * 2);
      return;
    }
    setY(-heightUnit * value + heightUnit * 2);
  }, [value]);

  const handleTouchStart = (e: any) => {
    e.preventDefault?.();
    setIsTransition(false);
    setStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: any) => {
    e.preventDefault?.();
    const diff = e.targetTouches[0].clientY - start;
    const updateY = diff + initial;
    if (updateY < -columnHeight + heightUnit * 2) {
      setY(-columnHeight + heightUnit * 2);
      return;
    }
    if (updateY > heightUnit * 3) {
      setY(heightUnit * 3);
      return;
    }
    setY(updateY);
  };

  const handleTouchEnd = (e: any) => {
    e.preventDefault?.();
    if (y < -columnHeight + heightUnit * 3) {
      const val = -columnHeight + heightUnit * 3;
      setY(val);
      setInitial(val);
      setIsTransition(true);

      const v = Math.floor((val - heightUnit * 2) / -heightUnit);
      onChange?.(v);
      return;
    }
    if (y > heightUnit * 2) {
      const val = heightUnit * 2;
      setY(val);
      setInitial(val);
      setIsTransition(true);

      const v = Math.floor((val - heightUnit * 2) / -heightUnit);
      onChange?.(v);
      return;
    }
    if (y % heightUnit !== 0) {
      const r = Math.round(y / heightUnit) - Math.floor(y / heightUnit);
      let val = 0;
      if (r === 1) {
        val = Math.ceil(y / heightUnit) * heightUnit;
      } else {
        val = Math.floor(y / heightUnit) * heightUnit;
      }
      setY(val);
      setInitial(val);
      setIsTransition(true);

      const v = Math.floor((val - heightUnit * 2) / -heightUnit);
      onChange?.(v);
      return;
    }
    setInitial(y);
  };

  return (
    <View className={prefixCls}>
      <View
        className={`${prefixCls}-items`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translate3d(0, ${y}PX, 0)`,
          transition: `${
            isTransition ? 'transform' : 'none'
          } 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)`,
        }}
      >
        {options?.map((option, index: number) => (
          <View key={index} className={`${prefixCls}-item`}>
            {typeof option === 'object' ? (option as OptionObjProps)?.[optionsKey] : option}
          </View>
        ))}
      </View>
    </View>
  );
};

export default PickerViewColumn;
