import * as React from 'react';
import { View, Text } from 'remax/one';
import { Skeleton, Switch, Card } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

const customizeSkeleton = (
  <View className={styles.app}>
    <View className={styles.image} />
    <View className={styles.info}>
      <View className={styles.main}>
        <View className={styles.title} />
        <View className={styles.item} />
      </View>
      <View className={styles.footer}>
        <Text className={styles.price} />
        <Text className={styles.cart} />
      </View>
    </View>
  </View>
);

export default () => {
  const [checked, setChecked] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const handleChangeSwitch = v => {
    setChecked(v);
    setLoading(!v);
  };
  return (
    <Frame>
      <Block title="Basic">
        <Skeleton />
      </Block>

      <Block title="TitleColor">
        <Skeleton titleColor="rgba(255, 153, 153, 0.2)" />
      </Block>

      <Block title="Without title">
        <Skeleton title={false} />
      </Block>

      <Block title="Paragraph">
        <Skeleton paragraph={{ rows: 4, width: [240, 'aut0', 'aut0', 200] }} />
      </Block>

      <Block title="Avatar">
        <Skeleton avatar />
      </Block>

      <Block title="Image">
        <Skeleton avatar image />
      </Block>

      <Block title="Customize">
        <Skeleton customize={customizeSkeleton} />
      </Block>

      <Block title="Fade" contentStyle={{ height: '300px' }}>
        <View className={styles.action}>
          <Switch small checked={checked} onChange={handleChangeSwitch} />
        </View>
        <Skeleton fade loading={loading}>
          <Card>
            <View className={styles.content}>Amazing!!!</View>
          </Card>
        </Skeleton>
      </Block>

      <Block title="Repetitions">
        <Skeleton repetitions={3} />
      </Block>

      <Block title="Space">
        <Skeleton repetitions={2} space={50} />
      </Block>

      <Block title="Style">
        <Skeleton
          style={{ padding: 10, borderRadius: 6, margin: '0 20px', backgroundColor: '#FFEEEE' }}
        />
      </Block>
    </Frame>
  );
};
