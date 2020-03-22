import * as React from 'react';
import { View } from 'remax/alipay';
import styles from './index.module.scss';


export interface FabProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const Fab = (props: FabProps) => {

  const { onClick, children } = props;
  
  return (
    <View 
      className={styles.app}
      onClick={onClick}
    >
      {children}
    </View>
  );
};

export default Fab;
