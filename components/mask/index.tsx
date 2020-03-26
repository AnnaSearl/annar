import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface MaskProps {
  show?: boolean;
  onClick?: () => void;
  zIndex?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Mask = (props: MaskProps): React.ReactElement => {
  
  const { 
    show, 
    onClick, 
    zIndex, 
    style,
    children,
  } = props;

  return (
    <View
      className={classNames({
        [styles.mask]: true,
        [styles.maskActive]: show,
      })}
      style={{
        ...style,
        zIndex: zIndex,
      }}
      onClick={onClick}
    >
      {children}
    </View>
  )
}

export default Mask;
