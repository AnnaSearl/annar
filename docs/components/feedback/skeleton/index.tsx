import * as React from 'react';
import { View } from 'remax/one';
import { Skeleton, Switch, Card } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

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
    </Frame>
  );
};
