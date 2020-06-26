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
  transparent?: boolean;
}

const Popup = (props: PopupProps): React.ReactElement => {
  const {
    open = false,
    children,
    onClose,
    closeable,
    title,
    position = 'center',
    style,
    mask = true,
    square,
    curve,
    transparent,
  } = props;

  const handleClickMask = () => {
    onClose?.();
  };

  const classes = classNames({
    [`${prefixCls}-container`]: true,
    [`${prefixCls}-container-${position}`]: position,
    [`${prefixCls}-container-ease`]: curve === 'ease',
    [`${prefixCls}-container-square`]: square,
    [`${prefixCls}-container-active`]: open,
    [`${prefixCls}-container-transparent`]: transparent,
  });

  return (
    <View className={prefixCls}>
      <View className={classes} style={style}>
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
