import * as React from 'react';
import { View } from 'remax/one';
import { Slider } from 'annar';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

export default () => {
  return (
    <Frame className={styles.app}>
      <Block title="Basic">
        <View className={styles.container}>
          <Slider />
        </View>
      </Block>
      <Block title="Disabled">
        <View className={styles.container}>
          <Slider disabled={true} />
        </View>
      </Block>
      <Block title="defaultValue">
        <View className={styles.container}>
          <Slider defaultValue={50} />
        </View>
      </Block>
      <Block title="Max">
        <View className={styles.container}>
          <Slider defaultValue={50} max={500} />
        </View>
      </Block>
      <Block title="Custom track color">
        <View className={styles.container}>
          <Slider defaultValue={50} trackColor={'red'} />
        </View>
      </Block>
      <Block title="Custom slider style">
        <View className={styles.container}>
          <Slider defaultValue={50} railClassName={styles.rail} />
        </View>
      </Block>
      <Block title="Custom hanle style">
        <View className={styles.container}>
          <Slider defaultValue={50} handleClassName={styles.handle} />
        </View>
      </Block>
      <Block title="OnChange">
        <View className={styles.container}>
          <Slider onChange={(val: number) => console.log(val)} />
        </View>
      </Block>
    </Frame>
  );
};
