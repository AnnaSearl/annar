import * as React from 'react';
import { View } from 'remax/alipay';
import classNames from 'classnames';
import Mask from '../mask';
import styles from './index.module.scss'


export interface PopupProps {
  open?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  closeable?: boolean;
  title?: React.ReactNode;
}

const Popup = (props: PopupProps): React.ReactElement => {

  const {
    open = false,
    children,
    onClose,
    closeable,
    title,
  } = props;

  const handleClickMask = () => {
    onClose?.();
  }

  return (
    <View
      className={styles.popup}
    >
      <View
        className={classNames({
          [styles.container]: true,
          [styles.containerActive]: open,
        })}
      >
        {
          title
            ? <View className={styles.title}>{title}</View>
            : null
        }
        {children}
        {
          closeable ?
            <View
              className={classNames({
                [styles.close]: true,
                'iconfont': true,
                'icon-close': true,
              })}
              onClick={() => {onClose?.()}}
            />
          : null
        }
      </View>
      <Mask 
        show={open}
        onClick={handleClickMask}
      />
    </View>
  )
}

export default Popup;
