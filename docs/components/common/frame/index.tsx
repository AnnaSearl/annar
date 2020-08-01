import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface BlockProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  grayBg?: boolean;
  lightBg?: boolean;
  padding?: boolean;
  style?: React.CSSProperties;
}

const Frame = (props: BlockProps) => {
  const { title, children, className = '', grayBg, lightBg, padding, style } = props;

  let backgroundColor = '#FDFFFD';
  if (grayBg) {
    backgroundColor = '#F2F2F2';
  }
  if (lightBg) {
    backgroundColor = '#F7F7F7';
  }

  return (
    <View
      className={classNames({
        [styles.app]: true,
        [className]: true,
        [styles.padding]: padding,
      })}
      style={{
        ...style,
        backgroundColor,
      }}
    >
      {title ? <View className={styles.title}>{title}</View> : null}
      <View className={styles.content}>{children}</View>
    </View>
  );
};

export default Frame;
