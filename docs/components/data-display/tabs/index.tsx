import * as React from 'react';
import { View, Text } from 'remax/one';
import { Tabs, Card } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

const { TabContent } = Tabs;

const tabs = [
  {
    key: '0',
    title: 'All',
  },
  {
    key: '1',
    title: 'Missed',
  },
];

const tabs1 = [
  {
    key: '0',
    title: 'All',
  },
  {
    key: '1',
    title: 'Missed',
  },
];

const tabs2 = [
  {
    key: '0',
    title: '全部',
  },
  {
    key: '1',
    title: (
      <View className={styles.tab}>
        待报价
        <Text className={styles.total}>7</Text>
      </View>
    ),
    content: <View>www</View>,
  },
  {
    key: '2',
    title: '询价中',
  },
  {
    key: '3',
    title: '待报价',
  },
  {
    key: '4',
    title: '报价中',
  },
  {
    key: '5',
    title: '报价成功',
  },
  {
    key: '6',
    title: '待付款',
  },
  {
    key: '7',
    title: '已完成',
  },
];

const tabs5 = [
  {
    key: '0',
    title: '全部',
  },
  {
    key: '1',
    title: (
      <View className={styles.tab5}>
        待报价
        <Text className={styles.total}>7</Text>
      </View>
    ),
  },
  {
    key: '2',
    title: '询价中',
  },
  {
    key: '3',
    title: '待报价',
  },
  {
    key: '4',
    title: '报价中',
  },
];

const tabs3 = [
  {
    key: '0',
    title: '精选',
  },
  {
    key: '1',
    title: '关注',
  },
  {
    key: '2',
    title: '广场',
  },
];

const tabs4 = [
  {
    key: '0',
    title: 'All',
  },
  {
    key: '1',
    title: 'Read',
  },
  {
    key: '2',
    title: 'Missed',
  },
];

export default () => {
  const [stateKey, setStateKey] = React.useState('0');
  const [stateKey1, setStateKey1] = React.useState('0');
  const [stateKey2, setStateKey2] = React.useState('0');
  const [stateKey3, setStateKey3] = React.useState('0');
  const [stateKey4, setStateKey4] = React.useState('0');
  const [stateKey5, setStateKey5] = React.useState('0');

  return (
    <Frame padding grayBg>
      <Block noTitlePadding title="Basic">
        <Tabs onTabClick={({ key }) => setStateKey(key)} activeKey={stateKey}>
          {tabs.map(tab => (
            <TabContent key={tab.key} tab={tab.title}>
              <Card>
                {[...new Array(1)].map((i, index) => (
                  <View key={index} className={styles.tabContent}>{`${tab.title} content`}</View>
                ))}
              </Card>
            </TabContent>
          ))}
        </Tabs>
      </Block>
      <Block noTitlePadding title="TitleSquare & Animated">
        <Tabs
          onTabClick={({ key }) => setStateKey1(key)}
          activeKey={stateKey1}
          titleSquare
          animated
        >
          {tabs1.map(tab => (
            <TabContent key={tab.key} tab={tab.title}>
              <Card>
                <View className={styles.tabContent}>{`${tab.title} content`}</View>
              </Card>
            </TabContent>
          ))}
        </Tabs>
      </Block>
      <Block noTitlePadding title="Type">
        <View className={styles.subTitle}>plain</View>
        <Tabs type="plain" onTabClick={({ key }) => setStateKey2(key)} activeKey={stateKey2}>
          {tabs2.map(tab => (
            <TabContent key={tab.key} tab={tab.title}>
              <Card>
                <View className={styles.tabContent}>{`${
                  tab.key === '1' ? '待报价' : tab.title
                } content`}</View>
              </Card>
            </TabContent>
          ))}
        </Tabs>
        <View className={styles.subTitle}>card</View>
        <Tabs type="card" onTabClick={({ key }) => setStateKey3(key)} activeKey={stateKey3}>
          {tabs3.map(tab => (
            <TabContent key={tab.key} tab={tab.title}>
              <Card>
                <View className={styles.tabContent}>{`${tab.title} content`}</View>
              </Card>
            </TabContent>
          ))}
        </Tabs>
      </Block>
      <Block noTitlePadding title="Vertical" contentStyle={{ height: '630px' }}>
        <Tabs
          onTabClick={({ key }) => setStateKey5(key)}
          activeKey={stateKey5}
          direction="vertical"
        >
          {tabs5.map(tab => (
            <TabContent key={tab.key} tab={tab.title}>
              <Card>
                <View className={styles.tabContent}>{`${
                  tab.key === '1' ? '待报价' : tab.title
                } content`}</View>
              </Card>
            </TabContent>
          ))}
        </Tabs>
      </Block>
      <Block noTitlePadding title="Fixed">
        <View className={styles.subTitle}>使用fixed属性可以使Tabs固定在页面顶部</View>
        <Tabs
          // fixed
          onTabClick={({ key }) => setStateKey4(key)}
          activeKey={stateKey4}
        >
          {tabs4.map(tab => (
            <TabContent key={tab.key} tab={tab.title}>
              <Card>
                <View className={styles.tabContent}>{`${tab.title} content`}</View>
              </Card>
            </TabContent>
          ))}
        </Tabs>
      </Block>
    </Frame>
  );
};
