import React, { useState, useEffect } from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('picker-view-column');

const heightUnit = 44;

export interface RangeObjProps {
  [propName: string]: string;
}

type RangeProps = string | RangeObjProps;

export interface PickerViewColProps {
  value?: number;
  range?: RangeProps[];
  rangeKey?: string;
  children?: React.ReactNode;
  onTouchStart?: (e: any) => void;
  onTouchMove?: (e: any) => void;
  onTouchEnd?: (e: any) => void;
}

const Picker: React.FC<PickerViewColProps> = (props: PickerViewColProps) => {
  const { value = 0, range = [], rangeKey = 'value' } = props;

  const [initial, setInitial] = useState(heightUnit * 2);
  const [start, setStart] = useState(0);
  const [y, setY] = useState(initial);
  const [columnHeight, setColumnHeight] = useState(0);
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    setColumnHeight(range.length * heightUnit);
  }, [range]);

  useEffect(() => {
    if (!value || value <= 0) {
      setY(heightUnit * 2);
      return;
    }
    setY(-heightUnit * value + heightUnit * 2);
  }, [value]);

  const handleTouchStart = (e: any) => {
    e.preventDefault();
    setIsTransition(false);
    setStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: any) => {
    e.preventDefault();
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
    e.preventDefault();
    if (y < -columnHeight + heightUnit * 3) {
      setY(-columnHeight + heightUnit * 3);
      setInitial(-columnHeight + heightUnit * 3);
      setIsTransition(true);
      return;
    }
    if (y > heightUnit * 2) {
      setY(heightUnit * 2);
      setInitial(heightUnit * 2);
      setIsTransition(true);
      return;
    }
    if (y % heightUnit !== 0) {
      const r = Math.round(y / heightUnit) - Math.floor(y / heightUnit);
      if (r === 1) {
        const updateY = Math.ceil(y / heightUnit) * heightUnit;
        setY(updateY);
        setInitial(updateY);
        setIsTransition(true);
      } else {
        const updateY = Math.floor(y / heightUnit) * heightUnit;
        setY(updateY);
        setInitial(updateY);
        setIsTransition(true);
      }
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
        {range?.map((option, index: number) => (
          <View key={index} className={`${prefixCls}-item`}>
            {(option as RangeObjProps)?.[rangeKey] || option}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Picker;
