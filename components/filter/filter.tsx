import React, { useState, useRef } from 'react';
import { View } from 'remax/one';
import Mask from '../mask';
import FilterItem from './item';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('filter');

export interface FilterProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  zIndex?: number;
}

const InternalFilter = (props: FilterProps) => {
  const filterRef = useRef<any[]>([]);
  const { style, zIndex, children } = props;
  const [showMask, setShowMask] = useState(false);

  const hanldeShowMask = (value: boolean) => {
    setShowMask(value);
  };

  const handleTapItem = (value: boolean, index: number, tapCb: () => void) => {
    filterRef.current.forEach((item, cindex) => {
      if (index !== cindex) {
        item.current.close();
      }
    });
    if (value) {
      setShowMask(true);
    } else {
      setShowMask(false);
    }
    tapCb?.();
  };

  const hanldeTapMask = () => {
    filterRef.current.forEach(item => {
      item.current.close();
    });
    setShowMask(false);
  };

  const filterItems = React.Children.map(children, (filterItem: any, index: number) => {
    const itemRef = useRef();
    filterRef.current[index] = itemRef;
    if (filterItem.ref) {
      filterRef.current[index] = filterItem.ref;
    }
    return (
      <FilterItem
        {...filterItem.props}
        ref={filterRef.current[index]}
        onTap={v => handleTapItem(v, index, filterItem.props?.onTap)}
        onShowMask={hanldeShowMask}
        id={index}
      />
    );
  });

  const isAddZIndex = zIndex || zIndex === 0;
  let filterStyle = style;
  if (isAddZIndex) {
    filterStyle = {
      ...style,
      zIndex,
    };
  }

  return (
    <View className={prefixCls} style={filterStyle}>
      <View className={`${prefixCls}-content`} style={{ height: showMask ? '100%' : '100px' }}>
        <View className={`${prefixCls}-items`}>{filterItems}</View>
      </View>
      <Mask
        show={showMask}
        onTap={hanldeTapMask}
        style={{
          top: 'unset',
          bottom: 'unset',
          height: '100%',
        }}
        zIndex={0}
      />
    </View>
  );
};

export default InternalFilter;

// {/* mask必须放到items的后面,否则会导致动画transition失效 */}
