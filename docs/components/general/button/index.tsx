import * as React from 'react';
import { View } from 'remax/one';
import { Button } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

export default () => {
  const [delLoading, setDelLoading] = React.useState(false);
  const [okLoading, setOkLoading] = React.useState(false);

  return (
    <Frame>
      <View className={styles.app}>
        <Block title="Type">
          <View className={styles.group}>
            <Button>default</Button>
            <Button type="primary">primary</Button>
          </View>
        </Block>
        <Block title="Plain">
          <View className={styles.group}>
            <Button plain>default</Button>
            <Button type="primary" plain>
              primary
            </Button>
            <Button plain color="#07C160">
              success
            </Button>
          </View>
        </Block>
        <Block title="Hairline">
          <View className={styles.group}>
            <Button plain hairline>
              default
            </Button>
            <Button type="primary" plain hairline>
              primary
            </Button>
            <Button plain hairline color="#ff4f00">
              orange
            </Button>
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
            <Button
              type="primary"
              loading={okLoading}
              loadingText="loading..."
              onTap={() => setOkLoading(true)}
            >
              Confirm
            </Button>
            <Button
              type="primary"
              square
              danger
              loading={delLoading}
              loadingText="Deleting..."
              onTap={() => setDelLoading(true)}
            >
              Delete
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
