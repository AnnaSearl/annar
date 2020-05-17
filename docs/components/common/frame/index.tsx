import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface BlockProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  grayBg?: boolean;
  padding?: boolean;
  style?: React.CSSProperties;
}

const Frame = (props: BlockProps) => {
  const { title, children, className = '', grayBg, padding, style } = props;

  return (
    <View
      className={classNames({
        [styles.app]: true,
        [className]: true,
        [styles.padding]: padding,
      })}
      style={{
        ...style,
        backgroundColor: grayBg ? '#F2F2F2' : '#FDFFFD',
      }}
    >
      {title ? <View className={styles.title}>{title}</View> : null}
      <View className={styles.content}>{children}</View>
    </View>
  );
};

export default Frame;
