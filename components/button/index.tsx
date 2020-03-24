import * as React from 'react';
import { View, Text } from 'remax/alipay';
import classNames from 'classnames';
import { tuple } from '../_util/type';
import Loading from '../loading';
import styles from './index.module.scss';


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

  if (width) {
    return (
      <View
        className={styles.widthFixButton}
        style={{
          width: `${width}rpx`,
        }}
        onClick={handleClick}
      >
        <Text 
          className={classNames({
            [styles.default]: true,
            [styles.large]: size === 'large',
            [styles.primary]: type === 'primary',
            [styles.disabled]: disabled,
          })}
          style={style}
        >
          {children}
        </Text>
      </View>
    )
  }

  return (
    <View
      className={classNames({
        [styles.default]: true,
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
        [styles.primary]: type === 'primary',
        [styles.disabled]: disabled,
        [styles.dangerDefault]: danger,
        [styles.danger]: type === 'primary' && danger,
        [styles.square]: square,
        [styles.block]: block,
        [styles.loading]: loading,
      })}
      onClick={handleClick}
      style={style}
    >
      {
        loading
          ? <Text className={styles.loadingIcon}>
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
