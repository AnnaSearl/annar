
import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.module.scss';


export interface ValueProps {
  placeholder?: string;
  children?: React.ReactNode;
}

 const Value = (props: ValueProps) => {
  const {
    placeholder,
    children
  } = props;

  return (
    <View
      className={styles.value}
    >
      {
        (children || children === 0)
          ? children
          : <View className={styles.placeholder}>
              { placeholder }
            </View>
      }
    </View>
  );
};

export default Value;
