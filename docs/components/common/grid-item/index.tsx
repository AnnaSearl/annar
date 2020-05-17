import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.module.scss';

export interface GridItemProps {
  name?: string;
  children?: any;
}

const GridItem = (props: GridItemProps) => {
  const { name, children } = props;
  return (
    <View className={styles.gridItem}>
      {children}
      <View className={styles.name}>{name}</View>
    </View>
  );
};

export default GridItem;
