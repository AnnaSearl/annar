import * as React from 'react';
import { useMemo } from 'react';
import classNames from 'classnames';
import { View } from 'remax/alipay';
import styles from './index.module.scss';


export interface RateProps {
  number?: number;
  label?: React.ReactNode;
  value?: number;
  onChange?: (e: any) => void;
}

const Rate = (props: RateProps) => {

  const {
    number = 5,
    label,
    value = -1,
    onChange,
  } = props;

  const handleClick = (index: number) => {
    onChange?.(index);
  }

  const stars = useMemo(() => {
    if (!number) {
      return [];
    }
    return [...new Array(number).keys()]
  }, [number])

  return (
    <View className={styles.rate}>
      {
        label 
          ? <View className={styles.label}>{label}</View> 
          : null
      }
      <View className={styles.value}>
        {
          stars.map((item, index) => (
            <View
              key={index}
              className={classNames({
                [styles.star]: true,
                'iconfont': true,
                'icon-favor': value < index,
                'icon-favorfill': value >= index,
              })}
              style={{
                color: value >= index ? "#FFD700" : "#999",
              }}
              onClick={() => {handleClick(index)}}
            />
          ))
        }
      </View>
    </View>
  )
};

export default Rate;
