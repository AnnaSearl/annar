/** @format */

import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import Mask from '../mask';
import Icon from '../icon';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('popup');

export interface PopupProps {
  open?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
  closeable?: boolean;
  title?: React.ReactNode;
  position?: string;
  style?: React.CSSProperties;
  mask?: boolean;
  square?: boolean;
  curve?: string;
}

const Popup = (props: PopupProps): React.ReactElement => {
  const {
    open = false,
    children,
    onClose,
    closeable,
    title,
    position = 'bottom',
    style,
    mask = true,
    square,
    curve,
  } = props;

  const handleClickMask = () => {
    onClose?.();
  };

  return (
    <View className={prefixCls}>
      <View
        className={classNames({
          [`${prefixCls}-container`]: true,
          [`${prefixCls}-container-bottom`]: position === 'bottom',
          [`${prefixCls}-container-top`]: position === 'top',
          [`${prefixCls}-container-left`]: position === 'left',
          [`${prefixCls}-container-right`]: position === 'right',
          [`${prefixCls}-container-ease`]: curve === 'ease',
          [`${prefixCls}-container-square`]: square,
          [`${prefixCls}-container-active`]: open,
        })}
        style={style}
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
            <Icon type="close" size="40px" color="#999" />
          </View>
        ) : null}
      </View>
      {mask ? <Mask show={open} onTap={handleClickMask} /> : null}
    </View>
  );
};

export default Popup;
