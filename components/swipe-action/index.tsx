import React, { useState, useEffect, useMemo } from 'react';
import { View } from 'remax/one';
import { createSelectorQuery } from '../one';
import classNames from 'classnames';
import { throttle, guid } from '../_util';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('swipe');

export interface SwipeActionOptionProps {
  name?: React.ReactNode;
  style?: React.CSSProperties;
  onTap?: (e: any) => void;
  [restProps: string]: any;
}

export interface SwipeActionProps {
  open?: boolean;
  options?: SwipeActionOptionProps[];
  children?: React.ReactNode;
  onTouchStart?: (e: any) => void;
  onOpened?: (e: any) => void;
  onClosed?: (e: any) => void;
}

const SwipeAction: React.FC<SwipeActionProps> = (props: SwipeActionProps): React.ReactElement => {
  const { open, options = [], onTouchStart, onOpened, onClosed, children } = props;

  const [x, setX] = useState(0);
  const [origin, setOrigin] = useState(0);
  const [transition, setTransition] = useState('none');
  const [startX, setStartX] = useState(0);
  const [actionsWidth, setActionsWidth] = useState(0);

  const swipeId = useMemo(() => guid(), []);

  const handleActionsWidth = (id: string) => {
    createSelectorQuery()
      // @ts-ignore
      .select(`.${prefixCls}-actions-${id}`)
      .boundingClientRect()
      .exec((rect: any) => {
        const w = Array.isArray(rect) ? rect?.[0]?.width : rect?.width;
        setActionsWidth(w);
      });
  };

  useEffect(() => {
    handleActionsWidth(swipeId);
  }, []);

  useEffect(() => {
    const width = Number(`-${actionsWidth}`);
    setX(open ? width : 0);
    setOrigin(open ? width : 0);
    setTransition('all 0.3s');
  }, [open]);

  const throttleTouchMove = throttle(
    (e: any) => {
      const touch = e.touches[0];
      const currenrX = touch.pageX;
      const diff = currenrX - startX;
      const total = diff + origin;
      if (total >= 0) {
        return;
      }
      setX(total);
    },
    30,
    { trailing: false },
  );

  const handleTouchStart = (e: any) => {
    // touch当前行时关闭其他行
    onTouchStart?.(e);
    const touch = e.touches[0];
    setStartX(touch.pageX);
    setTransition('none');
  };

  const handleTouchMove = (e: any) => {
    // @ts-ignore
    throttleTouchMove(e);
  };

  const handleTouchEnd = (e: any) => {
    const width = Number(`-${actionsWidth}`);
    if (x >= 0) {
      return;
    }
    if (x > origin) {
      onClosed?.(e);
      setX(0);
      setOrigin(0);
      setTransition('all 0.3s');
      return;
    }
    let x2 = 0;
    let origin2 = 0;
    if (x <= -30) {
      x2 = width;
      origin2 = width;
      onOpened?.(e);
    }
    if (x > -30) {
      x2 = 0;
      origin2 = 0;
      onClosed?.(e);
    }
    setX(x2);
    setOrigin(origin2);
    setTransition('all 0.3s');
  };

  const handleTouchCancel = () => {
    const width = Number(`-${actionsWidth}`);
    setX(width);
    setOrigin(width);
  };

  const handleTap = (item: any) => {
    item?.onTap?.(item);
  };

  return (
    <View
      className={classNames(prefixCls, {
        [`${prefixCls}-class`]: true,
      })}
      // style={options?.[options.length - 1]?.style}
    >
      <View
        className={`${prefixCls}-container`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
        style={{
          transform: `translate3d(${x}PX, 0, 0)`, //使用transform或导致子级内的fixed直接降级为absolute
          // left: `${x}PX`,
          transition,
        }}
      >
        {children}
        <View
          className={classNames({
            [`${prefixCls}-actions`]: true,
            [`${prefixCls}-actions-${swipeId}`]: true,
          })}
        >
          {options?.map((item, index) => (
            <View
              key={index}
              className={`${prefixCls}-action`}
              onTap={() => handleTap(item)}
              style={item?.style}
            >
              {item?.name}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SwipeAction;
