import * as React from 'react';
import { View } from 'remax/one';
import { Card } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

export default () => {
  return (
    <Frame grayBg padding>
      <Block noTitlePadding title="Basic">
        <Card>
          <View className={styles.row}>Card content</View>
          <View className={styles.row}>Card content</View>
          <View className={styles.row}>Card content</View>
        </Card>
      </Block>
      <Block noTitlePadding title="With Title">
        <Card title="title">
          <View className={styles.row}>Card content</View>
          <View className={styles.row}>Card content</View>
          <View className={styles.row}>Card content</View>
        </Card>
      </Block>
      <Block noTitlePadding title="With Extra">
        <Card title="title" extra={<View className={styles.extra}>status</View>}>
          <View className={styles.row}>Card content</View>
          <View className={styles.row}>Card content</View>
          <View className={styles.row}>Card content</View>
        </Card>
      </Block>
    </Frame>
  );
};
