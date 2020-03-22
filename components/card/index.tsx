import * as React from 'react';
import { View } from 'remax/alipay';
import styles from './index.module.scss';

export interface CardProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
}

 const Card = ({ title, extra, children }: CardProps) => {

  return (
    <View className={styles.card}>
      {
        title || extra
          ? <View className={styles.header}>
              <View className={styles.title}>
                {title}
              </View>
              <View className={styles.extra}>
                {extra}
              </View>
            </View>
          : <View style={{height: '30rpx'}} />
      }
      <View className={styles.content}>
        {children}
      </View>
    </View>
  );
};

export default Card;
