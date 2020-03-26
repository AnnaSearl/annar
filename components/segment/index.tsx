import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.scss';

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
        [styles.segment]: true,
        [styles.fixed]: fixed,
      })}
    >
      {
        options.map((item) => (
          <View
            key={item.key}
            className={classNames({
              [styles.item]: true,
              [styles.selected]: value === item.key,
            })}
            style={style}
            onClick={() => {onChange?.(item)}}
          >
            {item.value}
          </View>
        ))
      }
    </View>
  )
}

export default Segment;