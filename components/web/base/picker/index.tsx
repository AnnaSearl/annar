import React, { useState, useEffect } from 'react';
import Popup from '../../../popup';
import { getPrefixCls } from '../../../common';

const prefixCls = getPrefixCls('base-picker');

export interface RangeObjProps {
  [propName: string]: string;
}

type RangeProps = string | RangeObjProps;

export interface PickerProps {
  value?: number;
  range?: RangeProps[];
  rangeKey?: string;
  title?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onChange?: (e: any) => void;
}

const heightUnit = 44;

const Picker = (props: PickerProps) => {
  const { value = 0, range = [], rangeKey = 'value', title, disabled, children, onChange } = props;

  const [open, setOpen] = useState(false);
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

  const handleTap = () => {
    if (disabled) {
      return;
    }
    setOpen(state => !state);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleOK = () => {
    const v = Math.floor((y - heightUnit * 2) / -heightUnit);
    const e = { detail: { value: v } };
    onChange?.(e);
    setOpen(false);
  };

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
    <div className={prefixCls}>
      <div onClick={handleTap}>{children}</div>
      <Popup position="bottom" open={open} onClose={() => setOpen(false)}>
        <div className={`${prefixCls}-container`}>
          <div className={`${prefixCls}-toolbar`}>
            <div className={`${prefixCls}-toolbar-cancel`} onClick={handleCancel}>
              取消
            </div>
            <div className={`${prefixCls}-toolbar-tittle`}>{title}</div>
            <div className={`${prefixCls}-toolbar-confirm`} onClick={handleOK}>
              确定
            </div>
          </div>
          <div className={`${prefixCls}-columns`}>
            <div className={`${prefixCls}-column`}>
              <ul
                className={`${prefixCls}-column-items`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                // onMouseDown={handleTouchStart}
                // onMouseMove={handleTouchMove}
                // onMouseUp={handleTouchEnd}
                style={{
                  transform: `translate3d(0, ${y}PX, 0)`,
                  transition: `${
                    isTransition ? 'transform' : 'none'
                  } 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)`,
                }}
              >
                {range?.map((option, index: number) => (
                  <li key={index} className={`${prefixCls}-column-item`}>
                    {(option as RangeObjProps)?.[rangeKey] || option}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${prefixCls}-selected`} />
            <div className={`${prefixCls}-mask`} />
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default Picker;
