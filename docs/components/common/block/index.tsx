import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.module.scss';

export interface BlockProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

const Block = (props: BlockProps) => {
  
  const { 
    title,
    children,
  } = props;

  return (
    <View className={styles.block}>
      <View className={styles.title}>
        {title}
      </View>
      <View className={styles.content}>
        {children}
      </View>
    </View>
  )
}

export default Block;
