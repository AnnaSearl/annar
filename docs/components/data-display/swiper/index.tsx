import * as React from 'react';
import { View, Text } from 'remax/one';
import { Swiper, Button, Icon } from 'annar';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

const baseItemStyle = {
  backgroundColor: '#CCCCFF',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '36px',
};

const itemStyle = {
  backgroundColor: '#feffff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '36px',
};

export default () => {
  return (
    <Frame padding grayBg>
      <Block noTitlePadding title="Basic">
        <Swiper>
          <Swiper.Item style={baseItemStyle}>1</Swiper.Item>
          <Swiper.Item style={baseItemStyle}>2</Swiper.Item>
          <Swiper.Item style={baseItemStyle}>3</Swiper.Item>
          <Swiper.Item style={baseItemStyle}>4</Swiper.Item>
        </Swiper>
      </Block>

      <Block noTitlePadding title="Autoplay">
        <Swiper autoplay>
          <Swiper.Item style={baseItemStyle}>1</Swiper.Item>
          <Swiper.Item style={baseItemStyle}>2</Swiper.Item>
          <Swiper.Item style={baseItemStyle}>3</Swiper.Item>
          <Swiper.Item style={baseItemStyle}>4</Swiper.Item>
        </Swiper>
      </Block>

      <Block noTitlePadding title="Shape">
        <Swiper shape="sharp" indicatorLook="dark">
          <Swiper.Item style={itemStyle}>1</Swiper.Item>
          <Swiper.Item style={itemStyle}>2</Swiper.Item>
          <Swiper.Item style={itemStyle}>3</Swiper.Item>
          <Swiper.Item style={itemStyle}>4</Swiper.Item>
        </Swiper>
      </Block>

      <Block noTitlePadding title="IndicatorPosition">
        <Swiper indicatorPosition="bottom-right" indicatorLook="dark">
          <Swiper.Item style={itemStyle}>1</Swiper.Item>
          <Swiper.Item style={itemStyle}>2</Swiper.Item>
          <Swiper.Item style={itemStyle}>3</Swiper.Item>
          <Swiper.Item style={itemStyle}>4</Swiper.Item>
        </Swiper>
      </Block>

      <Block noTitlePadding title="Vertical">
        <Swiper autoplay vertical indicatorLook="dark">
          <Swiper.Item style={itemStyle}>1</Swiper.Item>
          <Swiper.Item style={itemStyle}>2</Swiper.Item>
          <Swiper.Item style={itemStyle}>3</Swiper.Item>
          <Swiper.Item style={itemStyle}>4</Swiper.Item>
        </Swiper>
      </Block>

      <Block noTitlePadding title="Size">
        <Swiper autoplay vertical size="mini" showIndicators={false}>
          <Swiper.Item className={styles.miniItem}>
            <View className={styles.left}>
              <Icon type="time" size="36px" color="#333" />
              <Text className={styles.title}>Annar</Text>
              <Text className={styles.description}>
                10/07 18:00 <Text className={styles.number}>2.2万</Text>人预订
              </Text>
            </View>
            <Button size="small" plain hairline color="#ff4f00">
              预订
            </Button>
          </Swiper.Item>
          <Swiper.Item className={styles.miniItem}>
            <View className={styles.left}>
              <Icon type="time" size="36px" color="#333" />
              <Text className={styles.title}>Eurus</Text>
              <Text className={styles.description}>
                10/09 19:00 <Text className={styles.number}>7134</Text>人预订
              </Text>
            </View>
            <Button size="small" plain hairline color="#ff4f00">
              预订
            </Button>
          </Swiper.Item>
          <Swiper.Item className={styles.miniItem}>
            <View className={styles.left}>
              <Icon type="time" size="36px" color="#333" />
              <Text className={styles.title}>Melos</Text>
              <Text className={styles.description}>
                10/16 02:00 <Text className={styles.number}>1.2万</Text>人预订
              </Text>
            </View>
            <Button size="small" plain hairline color="#ff4f00">
              预订
            </Button>
          </Swiper.Item>
          <Swiper.Item className={styles.miniItem}>
            <View className={styles.left}>
              <Icon type="time" size="36px" color="#333" />
              <Text className={styles.title}>Ling</Text>
              <Text className={styles.description}>
                10/27 19:00 <Text className={styles.number}>1000</Text>人预订
              </Text>
            </View>
            <Button size="small" plain hairline color="#ff4f00">
              预订
            </Button>
          </Swiper.Item>
        </Swiper>
      </Block>
    </Frame>
  );
};
