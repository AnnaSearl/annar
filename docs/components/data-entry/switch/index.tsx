import * as React from 'react';
import { View } from 'remax/one';
import { Switch, Cell } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

export default () => {
  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(true);
  const [value, setValue] = React.useState(false);

  return (
    <Frame grayBg className={styles.app}>
      <Block title="Basic">
        <View className={styles.container}>
          <Switch checked={checked} onChange={v => setChecked(v)} />
        </View>
      </Block>
      <Block title="Small">
        <View className={styles.container}>
          <Switch small checked={checked1} onChange={v => setChecked1(v)} />
        </View>
      </Block>
      <Block title="Disabled">
        <View className={styles.container}>
          <Switch disabled checked={false} />
          <View style={{ display: 'inline-block', width: '30px', height: '24px' }} />
          <Switch disabled checked />
        </View>
      </Block>
      <Block title="With Cell">
        <Cell
          label="设为默认地址"
          valueStyle={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Switch checked={value} onChange={v => setValue(v)} />
        </Cell>
      </Block>
    </Frame>
  );
};
