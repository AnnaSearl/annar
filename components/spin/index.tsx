import * as React from 'react';
import { View } from 'remax/alipay';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface SpinProps {
  loading?: boolean;
  children?: React.ReactNode;
  className?: any;
  style?: React.CSSProperties;
}

const Spin = (props: SpinProps) => {
  
  const { loading, children, className, style } = props;

  return (
    <View 
      className={classNames({
        [styles.spin]: true,
        [className]: true,
      })} 
      style={{
        ...style,
      }}
    >
      {
        loading 
          ? <View className={styles.loading} />
          : <View className={styles.default} /> 
      }
      <View>{children}</View>
    </View>
  )
}

export default Spin;
