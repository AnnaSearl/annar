import * as React from 'react';
import { View, Text } from 'remax/one';
import classNames from 'classnames';
import { tuple } from '../_util';
import Loading from '../loading';
import { getPrefixCls } from '../common';
import './index.scss';


const prefixCls = getPrefixCls('button');

const ButtonTypes = tuple('default', 'primary');
export type ButtonType = typeof ButtonTypes[number];

export interface ButtonProps {
  type?: ButtonType;
  size?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
  width?: number;
  danger?: boolean;
  square?: boolean;
  block?: boolean;
  loading?: boolean;
  loadingText?: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {

  const {
    type,
    size,
    style,
    children,
    onClick,
    disabled,
    width,
    danger,
    square,
    block,
    loading,
    loadingText,
  } = props;

  const handleClick = () => {
    if (disabled) {
      return;
    } 
    onClick?.();
  }

  // if (width) {
  //   return (
  //     <View
  //       className={styles.widthFixButton}
  //       style={{
  //         width: `${width}rpx`,
  //       }}
  //       onTap={handleClick}
  //     >
  //       <Text 
  //         className={classNames({
  //           [`${prefixCls}default]: true,
  //           [`${prefixCls}large]: size === 'large',
  //           [`${prefixCls}primary]: type === 'primary',
  //           [`${prefixCls}disabled]: disabled,
  //         })}
  //         style={style}
  //       >
  //         {children}
  //       </Text>
  //     </View>
  //   )
  // }

  return (
    <View
      className={classNames({
        [prefixCls]: true,
        [`${prefixCls}-small`]: size === 'small',
        [`${prefixCls}-large`]: size === 'large',
        [`${prefixCls}-primary`]: type === 'primary',
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-dangerDefault`]: danger,
        [`${prefixCls}-danger`]: type === 'primary' && danger,
        [`${prefixCls}-square`]: square,
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-loading`]: loading,
      })}
      onTap={handleClick}
      style={style}
    >
      {
        loading
          ? <Text className={`${prefixCls}-loading-icon`}>
              <Loading color="#FDFFFD" radius="36rpx" />
            </Text>
          : null
      }
      <Text>
        {(loading && loadingText) ? loadingText : children}
      </Text>
    </View>
  );
};

export default Button;
