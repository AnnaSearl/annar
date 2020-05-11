import * as React from 'react';
import { View, Image } from 'remax/one';
import styles from './index.module.scss';


export interface ImagesProps {
  data?: string[];
}

const Grid = (props: ImagesProps) => {

  const { data = [] } = props;
  return (
    <View className={styles.grid}>
      {
        data?.map((item: string, index: number) => (
          <View
            key={index}
            className={styles.item}
          >
            
          </View>
        ))
      }
    </View>
  )
}

export default Grid;
