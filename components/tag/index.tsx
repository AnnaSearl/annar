import * as React from 'react';
import { View } from 'remax/alipay';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface TagProps {
  type?: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Tag = (props: TagProps): React.ReactElement => {
  
  const { 
    type,
    size,
    className = '',
    style,
    children,
    onClick,
  } = props;

  return (
    <View 
      className={classNames({
        [styles.default]: true,
        [styles.small]: size === 'small',
        [styles.large]: size === 'large',
        [styles.info]: type === 'info',
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
        [className]: true,
      })}
      style={style}
      onClick={onClick}
    >
      {children}
    </View>
  )
}

export interface CheckableTagProps {
  className?: string;
  checked?: boolean;
  onChange?: (e: any) => void;
  children?: React.ReactNode;
}

Tag.CheckableTag = (props: CheckableTagProps) => {

  const {
    className = '',
    checked, 
    onChange,
    children,
  } = props;

  return (
    <Tag
      size="large"
      {...props}
      className={classNames({
        [styles.checked]: checked,
        [className]: true,
      })}
      onClick={() => { onChange?.(!checked) }}
    >
      {children}
    </Tag>
  )
}

export default Tag;
