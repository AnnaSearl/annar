import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface BlockProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  noTitlePadding?: boolean;
  contentStyle?: React.CSSProperties;
  className?: string;
}

const Block = (props: BlockProps) => {
  const { title, children, noTitlePadding, contentStyle, className } = props;

  return (
    <View className={classNames(styles.block, className)}>
      <View className={styles.title} style={{ paddingLeft: noTitlePadding ? '0' : '24px' }}>
        {title}
      </View>
      <View className={styles.content} style={contentStyle}>
        {children}
      </View>
    </View>
  );
};

export default Block;
