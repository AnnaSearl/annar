import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { createSelectorQuery } from '../one';
import { throttle, guid } from '../_util';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('swiper');

const getChildrenNode = (children: React.ReactNode) => {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length <= 1) {
    return childrenArray;
  }
  let childrenNode = [...childrenArray];
  childrenNode.unshift(childrenArray[childrenArray.length - 1]);
  childrenNode.push(childrenArray[0]);
  childrenNode = childrenNode?.map((child: any, index) => ({
    ...child,
    key: '.' + index,
  }));

  return childrenNode;
};

const getIndicatorsNode = (
  num: number,
  current: number,
  position: string,
  color?: [string, string?],
  style?: [React.CSSProperties, React.CSSProperties?],
  look?: 'light' | 'dark' | 'anna',
) => {
  let defaultColor: any = undefined;
  let activeColor: any = undefined;
  if (Array.isArray(color)) {
    if (color[0] && typeof color[0] === 'string') {
      activeColor = color[0];
    }
    if (color[1] && typeof color[1] === 'string') {
      defaultColor = color[1];
    }
  }

  if (look === 'dark') {
    activeColor = '#000';
    defaultColor = 'rgba(0, 0, 0, 0.13)';
  }
  if (look === 'anna') {
    activeColor = '#ff7777';
    defaultColor = 'rgba(255, 119, 119, 0.2)';
  }

  let defaultStyle: any = {};
  let activeStyle: any = {};
  if (Array.isArray(style)) {
    if (style[0] && typeof style[0] === 'object') {
      activeStyle = style[0];
    }
    if (style[1] && typeof style[1] === 'object') {
      defaultStyle = style[1];
    }
  }

  let activeIndex = current - 1;
  if (current === 1) {
    activeIndex = 0;
  }
  if (current === 0) {
    activeIndex = num - 1;
  }
  if (current > num) {
    activeIndex = 0;
  }
  const indicators = [...new Array(num).keys()];
  const indicatorsNode = indicators.map(i => {
    const indicatorStyle = Object.assign({}, activeIndex === i ? activeStyle : defaultStyle, {
      backgroundColor: activeIndex === i ? activeColor : defaultColor,
    });
    return (
      <View
        key={i}
        className={classNames(`${prefixCls}-indicator`, {
          [`${prefixCls}-indicator-${position}`]: position,
          [`${prefixCls}-indicator-active`]: activeIndex === i,
        })}
        style={indicatorStyle}
      />
    );
  });
  return indicatorsNode;
};

export interface SwiperProps {
  autoplay?: boolean;
  autoplayInterval?: number;
  duration?: number;
  shape?: string;
  size?: string;
  height?: string | number;
  vertical?: boolean;
  curve?: string;
  showIndicators?: boolean;
  indicatorLook: 'light' | 'dark' | 'anna';
  indicatorPosition?: string;
  indicatorColor?: [string, string?];
  indicatorStyle?: [React.CSSProperties, React.CSSProperties?];
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const InternalSwiper: React.FC<SwiperProps> = (props: SwiperProps) => {
  const {
    autoplay,
    autoplayInterval = 3000,
    duration = 300,
    shape = 'square',
    size,
    height,
    vertical,
    curve = 'ease',
    showIndicators = true,
    indicatorLook = 'light',
    indicatorColor,
    indicatorStyle,
    indicatorPosition = vertical ? 'right' : 'bottom',
    style,
    children,
  } = props;

  // Make Special treatment when the number of childNodes is 1
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

  const startPoint = useRef(0);
  const startTime = useRef(0);
  const sideLength = useRef(0);
  const swiperId = useRef(guid());
  const swiperWidth = useRef(0);
  const swiperHeight = useRef(0);
  const swiperItemIndex = useRef(childrenArray.length > 1 ? 1 : 0);
  const origin = useRef(0);
  const intervalId = useRef<any>(null);

  const [distance, setDistance] = useState(0);
  const [transition, setTransition] = useState('none');

  useEffect(() => {
    const getSwiperWidth = () => {
      createSelectorQuery()
        // @ts-ignore
        .select(`.${prefixCls}-id-${swiperId.current}`)
        .boundingClientRect()
        .exec((rect: any) => {
          const node = Array.isArray(rect) ? rect?.[0] : rect;
          swiperWidth.current = node?.width;
          swiperHeight.current = node?.height;
          if (vertical) {
            sideLength.current = node?.height;
          } else {
            sideLength.current = node?.width;
          }
          if (childrenArray.length > 1) {
            origin.current = -sideLength.current;
            setDistance(origin.current);
          }
        });
    };
    getSwiperWidth();
  }, []);

  // Seamless switching
  useEffect(() => {
    // if (distance !== (childrenArray.length + 1) * -sideLength.current) {
    //   return;
    // }
    if (swiperItemIndex.current === 0) {
      setTimeout(() => {
        swiperItemIndex.current = childrenArray.length;
        origin.current = swiperItemIndex.current * -sideLength.current;
        setDistance(origin.current);
        setTransition('none');
      }, duration); // Extend 300ms and set the transition to none
    }
    if (swiperItemIndex.current > childrenArray.length) {
      setTimeout(() => {
        swiperItemIndex.current = 1;
        origin.current = swiperItemIndex.current * -sideLength.current;
        setDistance(origin.current);
        setTransition('none');
      }, duration); // Extend 300ms and set the transition to none
    }
  }, [swiperItemIndex.current, duration, distance]);

  // move
  const move = useCallback(
    (direction?: string) => {
      if (direction === 'left') {
        swiperItemIndex.current = swiperItemIndex.current + 1;
      }
      if (direction === 'right') {
        swiperItemIndex.current = swiperItemIndex.current - 1;
      }
      origin.current = swiperItemIndex.current * -sideLength.current;
      setDistance(origin.current);
      setTransition(`all ${duration / 1000}s ${curve}`);
    },
    [swiperItemIndex.current, sideLength.current, duration],
  );

  // control autoplay
  const controlAutoplay = useCallback(
    (action: string) => {
      if (action === 'start') {
        if (autoplay && !intervalId.current) {
          intervalId.current = setInterval(() => {
            move('left');
          }, autoplayInterval);
        }
      }
      if (action === 'stop') {
        if (intervalId.current) {
          clearInterval(intervalId.current);
          intervalId.current = null;
        }
      }
    },
    [autoplay, autoplayInterval, intervalId.current],
  );

  // autoplay
  useEffect(() => {
    if (!autoplay) {
      controlAutoplay('stop');
    }
    if (intervalId.current) {
      return;
    }
    if (autoplay) {
      controlAutoplay('start');
    }
  }, [autoplay, intervalId.current]);

  const throttleTouchMove = useCallback(
    throttle(
      (e: any) => {
        const touch = e.touches[0];
        const diff = (vertical ? touch.pageY : touch.pageX) - startPoint.current;
        const currDistance = diff + origin.current;

        if (currDistance) {
          setDistance(currDistance);
          setTransition('none');
        }
      },
      10,
      { trailing: false },
    ),
    [startPoint.current, origin.current],
  );

  const handleTouchStart = (e: any) => {
    if (childrenArray.length <= 1) {
      return;
    }
    controlAutoplay('stop');
    const touch = e.touches[0];
    startPoint.current = vertical ? touch.pageY : touch.pageX;
    startTime.current = Date.now();
  };

  const handleTouchMove = (e: any) => {
    if (childrenArray.length <= 1) {
      return;
    }
    // @ts-ignore
    throttleTouchMove(e);
  };

  const handleTouchEnd = (e: any) => {
    if (childrenArray.length <= 1) {
      return;
    }
    const touch = e.changedTouches[0] || e.nativeEvent.changedTouches[0];
    const diff = (vertical ? touch.pageY : touch.pageX) - startPoint.current;
    const speed = diff / (Date.now() - startTime.current);
    const harfSideLength = sideLength.current / 2;
    console.log('speed', speed);

    if (Math.abs(speed) > 0.3) {
      if (diff > 0) {
        move('right');
      }
      if (diff < 0) {
        move('left');
      }
    } else if (harfSideLength < Math.abs(diff)) {
      if (diff > 0) {
        move('right');
      }
      if (diff < 0) {
        move('left');
      }
    } else {
      move();
    }
    controlAutoplay('start');
  };

  const handleTouchCancel = () => {
    if (childrenArray.length <= 1) {
      return;
    }
    move();
  };

  const childrenNode = useMemo(() => getChildrenNode(children), [children]);

  const indicatorsNode = useMemo(
    () =>
      getIndicatorsNode(
        childrenArray.length,
        swiperItemIndex.current,
        indicatorPosition,
        indicatorColor,
        indicatorStyle,
        indicatorLook,
      ),
    [
      childrenArray.length,
      swiperItemIndex.current,
      indicatorPosition,
      indicatorColor,
      indicatorStyle,
      indicatorLook,
    ],
  );

  const classes = classNames(prefixCls, {
    [`${prefixCls}-id-${swiperId.current}`]: true,
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-${size}`]: size,
  });

  return (
    <View
      className={classes}
      style={{
        ...style,
        height,
        borderRadius: shape === 'round' ? swiperHeight.current : undefined,
      }}
    >
      <View
        className={classNames(`${prefixCls}-track`, { [`${prefixCls}-track-vertical`]: vertical })}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
        style={{
          transform: `translate3d(${vertical ? '0, ' + distance + 'PX' : distance + 'PX, 0'}, 0)`,
          transition,
        }}
      >
        {childrenNode}
      </View>
      {showIndicators ? (
        <View
          className={classNames(`${prefixCls}-indicators`, {
            [`${prefixCls}-indicators-${indicatorPosition}`]: indicatorPosition,
          })}
        >
          {indicatorsNode}
        </View>
      ) : null}
    </View>
  );
};

export default InternalSwiper;
