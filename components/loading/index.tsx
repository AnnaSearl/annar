import * as React from 'react';
import { View } from 'remax/alipay';
import styles from './index.module.scss';


export interface LoadingProps {
  color?: string;
  emptyColor?: string;
  size?: string;
}

const Loading = (props: LoadingProps) => {

  const {
    color = '#999',
    emptyColor = '#FDFFFD',
    size = '42rpx',
  } = props;

  return (
    <View 
      className={styles.loading}
    >
      <View 
        className={styles.round}
        style={{
          height: size,
          width: size,
          border: `2rpx solid ${color}`,
        }}
      />
      <View 
        className={styles.empty}
        style={{
          backgroundColor: emptyColor,
        }}
      />
    </View>
  )
};

export default Loading;
