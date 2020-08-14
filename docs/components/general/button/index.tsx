import * as React from 'react';
import { View, Text } from 'remax/one';
import { Button, Icon } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

export default () => {
  const [delLoading, setDelLoading] = React.useState(false);
  const [okLoading, setOkLoading] = React.useState(false);

  return (
    <Frame>
      <View className={styles.app}>
        <Block noTitlePadding title="Type">
          <View className={styles.group}>
            <Button>default</Button>
            <Button type="primary">primary</Button>
          </View>
        </Block>
        <Block noTitlePadding title="Plain">
          <View className={styles.group}>
            <Button plain>default</Button>
            <Button type="primary" plain>
              primary
            </Button>
            <Button plain color="#07C160">
              secure
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Hairline">
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
        <Block noTitlePadding title="Danger">
          <View className={styles.group}>
            <Button danger>danger</Button>
            <Button type="primary" danger>
              danger
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Ghost">
          <View className={styles.group}>
            <Button ghost>default</Button>
            <Button danger ghost>
              danger
            </Button>
            <Button plain ghost>
              plain
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Shape">
          <View className={styles.group}>
            <Button type="primary" shape="circle">
              C
            </Button>
            <Button type="primary">round</Button>
            <Button type="primary" shape="square">
              square
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Size">
          <View className={styles.group}>
            <Button type="primary" size="superlarge">
              super
            </Button>
            <Button type="primary" size="large">
              large
            </Button>
            <Button type="primary">default</Button>
            <Button type="primary" size="small">
              small
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Icon">
          <View className={styles.group}>
            <Button
              type="primary"
              shape="circle"
              icon={<Icon type="roundadd" color="#1890FF" size="50px" />}
              ghost
            />
            <Button plain type="primary" icon="check">
              Finish
            </Button>
            <Button plain hairline color="#FF4D4F" shape="square" icon="close">
              Close
            </Button>
          </View>
          <View className={styles.group}>
            <Button type="primary" shape="circle" icon="locationfill" />
            <Button type="primary" icon="add1">
              Follow
            </Button>
            <Button shape="square" icon="down">
              Download
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Float">
          <View className={styles.group} style={{ height: '60px' }}>
            <Button
              type="primary"
              shape="circle"
              icon="cart"
              float
              style={{
                left: '30px',
                bottom: '1320px',
              }}
            />
            <Button
              look="warning"
              float
              style={{
                left: '120px',
                bottom: '1320px',
              }}
            >
              <Text
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                前往App
                <Icon type="right" color="#000" size="28px" style={{ marginLeft: '6px' }} />
              </Text>
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Loading">
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
              icon="deletefill"
              loading={delLoading}
              loadingText="Deleting..."
              onTap={() => setDelLoading(true)}
            >
              Delete
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Disabled">
          <View className={styles.group}>
            <Button type="primary" disabled>
              disabled
            </Button>
            <Button type="primary" danger disabled>
              disabled
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Block">
          <View className={styles.group}>
            <Button type="primary" size="large" block style={{ marginBottom: '30px' }} loading>
              block
            </Button>
            <Button type="primary" size="large" danger square block>
              block
            </Button>
          </View>
        </Block>
        <Block noTitlePadding title="Look">
          <View className={styles.group}>
            <Button look="secondary">Secondary</Button>
          </View>
          <View className={styles.group}>
            <Button look="secure">Secure</Button>
            <Button look="warning">Warning</Button>
          </View>
          <View className={styles.group}>
            <Button look="light">Light</Button>
            <Button look="medium">Medium</Button>
            <Button look="dark">Dark</Button>
          </View>
          <View className={styles.group}>
            <Button size="large" block look="anna" style={{ marginBottom: '30px' }}>
              Anna
            </Button>
            <Button size="large" shape="square" block look="orange">
              Orange
            </Button>
          </View>
        </Block>
      </View>
    </Frame>
  );
};
