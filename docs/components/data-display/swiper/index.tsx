import * as React from 'react';
import { Swiper } from 'annar';
import { Block, Frame } from '../../common';

export default () => {
  return (
    <Frame padding>
      <Block noTitlePadding title="Basic">
        <Swiper autoplay indicatorPosition="bottom-right">
          <Swiper.Item>1</Swiper.Item>
          <Swiper.Item>2</Swiper.Item>
          <Swiper.Item>3</Swiper.Item>
          <Swiper.Item>4</Swiper.Item>
        </Swiper>
      </Block>

      <Block noTitlePadding title="Vertical">
        <Swiper vertical autoplay indicatorPosition="right" indicatorColor={['#000']}>
          <Swiper.Item>1</Swiper.Item>
          <Swiper.Item>2</Swiper.Item>
          <Swiper.Item>3</Swiper.Item>
          <Swiper.Item>4</Swiper.Item>
        </Swiper>
      </Block>
    </Frame>
  );
};
