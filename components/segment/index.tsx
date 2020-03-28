import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';
import './index.scss';


const prefixCls = getPrefixCls('segment');

export interface SegmentItemProps {
  key: number | string;
  value: string;
}

export interface SegmentProps {
  value: number | string;
  options: SegmentItemProps[];
  fixed?: boolean;
  style?: React.CSSProperties;
  onChange?: (params: SegmentItemProps) => any;
}

const Segment = (props: SegmentProps) => {
  const { value, options, onChange, fixed, style } = props;

  return (
    <View 
      className={classNames({
        [prefixCls]: true,
        [`${prefixCls}_fixed`]: fixed,
      })}
    >
      {
        options.map((item) => (
          <View
            key={item.key}
            className={classNames({
              [`${prefixCls}-item`]: true,
              [`${prefixCls}-selected`]: value === item.key,
            })}
            style={style}
            onTap={() => {onChange?.(item)}}
          >
            {item.value}
          </View>
        ))
      }
    </View>
  )
}

export default Segment;