import * as React from 'react';
import { View } from 'remax/one';
import { Button } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

export default () => {
  return (
    <Frame>
      <View className={styles.app}>
        <Block title="Type">
          <View className={styles.group}>
            <Button>default</Button>
            <Button type="primary">primary</Button>
          </View>
        </Block>
        <Block title="Danger">
          <View className={styles.group}>
            <Button danger>danger</Button>
            <Button type="primary" danger>
              danger
            </Button>
          </View>
        </Block>
        <Block title="Shape">
          <View className={styles.group}>
            <Button type="primary">round</Button>
            <Button type="primary" square>
              square
            </Button>
          </View>
        </Block>
        <Block title="Size">
          <View className={styles.group}>
            <Button type="primary" size="large">
              large
            </Button>
            <Button type="primary">default</Button>
            <Button type="primary" size="small">
              small
            </Button>
          </View>
        </Block>
        <Block title="Loading">
          <View className={styles.group}>
            <Button type="primary" loading loadingText="loading...">
              loading
            </Button>
            <Button type="primary" square danger loading loadingText="Deleting...">
              loading
            </Button>
          </View>
        </Block>
        <Block title="Disabled">
          <View className={styles.group}>
            <Button type="primary" disabled>
              disabled
            </Button>
            <Button type="primary" danger disabled>
              disabled
            </Button>
          </View>
        </Block>
        <Block title="Block">
          <View className={styles.group}>
            <Button type="primary" size="superlarge" block style={{ marginBottom: '30px' }} loading>
              block
            </Button>
            <Button type="primary" size="superlarge" danger square block>
              block
            </Button>
          </View>
        </Block>
      </View>
    </Frame>
  );
};
