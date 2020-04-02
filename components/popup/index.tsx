/** @format */

import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import Mask from '../mask';
import Icon from '../icon';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('popup');

export interface PopupProps {
  open?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  closeable?: boolean;
  title?: React.ReactNode;
}

const Popup = (props: PopupProps): React.ReactElement => {
  const { open = false, children, onClose, closeable, title } = props;

  const handleClickMask = () => {
    onClose?.();
  };

  return (
    <View className={prefixCls}>
      <View
        className={classNames({
          [`${prefixCls}-container`]: true,
          [`${prefixCls}-container_active`]: open,
        })}
      >
        {title ? <View className={`${prefixCls}-container-title`}>{title}</View> : null}
        {children}
        {closeable ? (
          <View
            className={`${prefixCls}-container-close`}
            onTap={() => {
              onClose?.();
            }}
          >
            <Icon type="close" size="40rpx" color="#999" />
          </View>
        ) : null}
      </View>
      <Mask show={open} onTap={handleClickMask} />
    </View>
  );
};

export default Popup;
