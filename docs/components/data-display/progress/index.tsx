import * as React from 'react';
import { Progress } from 'annar';
import { Block, Frame, Br } from '../../common';

const cStyle = { paddingRight: '300px' };

export default () => {
  return (
    <Frame padding>
      <Block noTitlePadding title="Basic" contentStyle={cStyle}>
        <Progress percent={50} />
      </Block>

      <Block noTitlePadding title="Color" contentStyle={cStyle}>
        <Progress percent={50} color="#FF7777" />
      </Block>

      <Block noTitlePadding title="BgColor" contentStyle={cStyle}>
        <Progress percent={50} color="#FF7777" bgColor="#FFDDDD" />
      </Block>

      <Block noTitlePadding title="Size" contentStyle={cStyle}>
        <Progress percent={35} size="small" />
        <Progress percent={50} />
        <Progress percent={65} size="large" />
      </Block>

      <Block noTitlePadding title="Shape" contentStyle={cStyle}>
        <Progress percent={50} shape="square" />
        <Progress percent={50} shape="sharp" />
      </Block>

      <Block noTitlePadding title="Width" contentStyle={cStyle}>
        <Progress percent={50} width="40px" />
        <Br />
        <Br />
        <Progress percent={50} shape="square" width="40px" />
        <Br />
        <Br />
        <Progress percent={50} shape="sharp" width="40px" />
      </Block>
    </Frame>
  );
};
