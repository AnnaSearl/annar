import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.module.scss';

export interface GridProps {
  children?: any;
}

const Grid = (props: GridProps) => {
  const { children } = props;
  return <View className={styles.grid}>{children}</View>;
};

export default Grid;
