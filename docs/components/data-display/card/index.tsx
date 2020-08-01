import * as React from 'react';
import { View } from 'remax/one';
import { Card, Icon } from 'anna-remax-ui';
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
      <Block noTitlePadding title="With Description">
        <Card title="title" description="Here is the description">
          <View className={styles.row}>Card content</View>
          <View className={styles.row}>Card content</View>
          <View className={styles.row}>Card content</View>
        </Card>
      </Block>
      <Block noTitlePadding title="With Extra">
        <Card
          title="title"
          description="Here is the description"
          extra={<View className={styles.extra}>status</View>}
        >
          <View className={styles.row}>Card content</View>
          <View className={styles.row}>Card content</View>
          <View className={styles.row}>Card content</View>
        </Card>
      </Block>
      <Block noTitlePadding title="With Foot">
        <Card
          title="title"
          foot={
            <View className={styles.foot}>
              <Icon type="comment" size="40px" style={{ marginRight: '6px' }} />
              联系客服
            </View>
          }
        >
          <View className={styles.row}>Card content</View>
          <View className={styles.row}>Card content</View>
          <View className={styles.row}>Card content</View>
        </Card>
      </Block>
      <Block noTitlePadding title="With Cover">
        <Card
          title="Anna"
          description="Summer is coming!"
          extra={<View className={styles.coverExtra}>🏖</View>}
          cover={
            <img alt="Anna" src="https://smebimage.fuliaoyi.com/Fg3SWrMKpkqRMFN9VQeFzOFCbbLo" />
          }
        >
          <View className={styles.coverRow}>
            Make up,and dressed. Are you ready to go? Weather is great, it's your holiday. We gotta
            party all day long.
          </View>
        </Card>
      </Block>
      <Block noTitlePadding title="Direction & Foot">
        <Card
          title="Anna"
          description="Summer is coming!"
          extra={<View className={styles.coverExtra}>🏖</View>}
          cover={
            <View className={styles.imageContainer}>
              <img alt="Anna" src="https://smebimage.fuliaoyi.com/Fg3SWrMKpkqRMFN9VQeFzOFCbbLo" />
            </View>
          }
          direction="horizontal"
          foot={
            <View className={styles.footHorizontal}>
              <Icon type="like" size="40px" />
              <Icon type="favor" size="40px" />
              <Icon type="comment" size="40px" />
            </View>
          }
        >
          <View className={styles.coverRow}>
            Make up,and dressed. Are you ready to go? Weather is great, it's your holiday. We gotta
            party all day long.
          </View>
        </Card>
      </Block>
      <Block noTitlePadding title="Shadow">
        <Card
          title="淡彩"
          description="花边-蕾丝花边-睫毛花边"
          cover={
            <View className={styles.imageContainer}>
              <img alt="Anna" src="https://smebimage.fuliaoyi.com/Fii3a22UpsVg2luI0aEwOCn870yP" />
            </View>
          }
          direction="horizontal"
          shadow
        ></Card>
      </Block>
    </Frame>
  );
};
