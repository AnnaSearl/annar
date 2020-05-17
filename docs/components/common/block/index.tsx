import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.module.scss';

export interface BlockProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  noTitlePadding?: boolean;
}

const Block = (props: BlockProps) => {
  const { title, children, noTitlePadding } = props;

  return (
    <View className={styles.block}>
      <View className={styles.title} style={{ paddingLeft: noTitlePadding ? '0' : '24px' }}>
        {title}
      </View>
      <View className={styles.content}>{children}</View>
    </View>
  );
};

export default Block;
