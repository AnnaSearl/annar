import * as React from 'react';
import { View } from 'remax/alipay';
import styles from './index.module.scss';


export interface LoadingProps {
  type?: string;
  color?: string;
  gapColor?: string;
  radius?: string;
}

const Loading = (props: LoadingProps) => {

  const {
    type,
    color = '#999',
    gapColor = '#FDFFFD',
    radius = '42rpx',
  } = props;

  if (type === "gap") {
    return (
      <View 
        className={styles.loadingGap}
        style={{
          height: radius,
          width: radius,
          border: `2rpx solid ${color}`,
        }}
      >
        <View 
          className={styles.gap}
          style={{
            backgroundColor: gapColor,
          }}
        />
      </View>
    )
  }
  return (
    <View 
      className={styles.loading}
      style={{
        height: radius,
        width: radius,
        borderColor: `${color} ${color} transparent`,
      }}
    />
  )
};

export default Loading;
