import * as React from 'react';
import { View, Text } from 'remax/alipay';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface ButtonProps {
  type?: string;
  size?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
  width?: number;
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
      className={styles.button}
      onClick={handleClick}
    >
      <Text
        className={classNames({
          [styles.default]: true,
          [styles.small]: size === 'small',
          [styles.large]: size === 'large',
          [styles.primary]: type === 'primary',
          [styles.disabled]: disabled,
        })}
        style={style}
      >
        {children}
      </Text>
    </View>
  );
};

export default Button;
