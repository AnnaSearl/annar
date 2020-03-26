import * as React from 'react';
import { View } from 'remax/one';
import Mask from '../mask';
import styles from './filter.module.scss';


export interface FilterProps {
  showMask?: boolean;
  onClickMask?: () => void;
  children?: React.ReactNode;
}

const Filter = (props: FilterProps) => {

  const { showMask, onClickMask, children } = props;

  return (
    <View className={styles.filter}>
      <View className={styles.items}>
        {children}
      </View>
      <Mask 
        show={showMask}
        onClick={onClickMask}
        style={{
          top: 'unset',
          bottom: 'unset',
          height: '100%',
        }}
      />
    </View>
  )
}

export default Filter;

// {/* mask必须放到items的后面,否则会导致动画transition失效 */}