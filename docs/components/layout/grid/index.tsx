import * as React from 'react';
import { View } from 'remax/one';
import { Row, Col, Grid } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import './index.scss';

const data = [
  '#FFDDDD',
  '#FFFFCC',
  '#FFDDDD',
  '#FFFFCC',
  '#FFDDDD',
  '#FFFFCC',
  '#FFDDDD',
  '#FFFFCC',
  '#FFDDDD',
];

export default () => {
  const [number, setNumber] = React.useState(1);
  const [number1, setNumber1] = React.useState(2);
  const [number2, setNumber2] = React.useState(3);
  const [number3, setNumber3] = React.useState(1);
  const [number4, setNumber4] = React.useState(1);
  const [number5, setNumber5] = React.useState(1);
  const [number6, setNumber6] = React.useState(1);
  const [number7, setNumber7] = React.useState(1);
  const [number8, setNumber8] = React.useState(1);
  const [number9, setNumber9] = React.useState(1);
  const [number10, setNumber10] = React.useState(1);
  const [number11, setNumber11] = React.useState(1);

  const renderGridItem = (col: any) => (
    <View className="demo-grid-item" style={{ backgroundColor: col }} />
  );

  return (
    <Frame padding>
      <Block noTitlePadding title="Basic" className="demo-basic">
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
        <Row>
          <Col span={24}>col-24</Col>
        </Row>
      </Block>
      <Block noTitlePadding title="Gutter" className="demo-gutter">
        <Row gutter={16}>
          <Col span={6}>
            <View>col-6</View>
          </Col>
          <Col span={6}>
            <View>col-6</View>
          </Col>
          <Col span={6}>
            <View>col-6</View>
          </Col>
          <Col span={6}>
            <View>col-6</View>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <View>col-8</View>
          </Col>
          <Col span={8}>
            <View>col-8</View>
          </Col>
          <Col span={8}>
            <View>col-8</View>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <View>col-12</View>
          </Col>
          <Col span={12}>
            <View>col-12</View>
          </Col>
        </Row>
      </Block>
      <Block noTitlePadding title="Offset">
        <Row>
          <Col span={6} offset={6}>
            <View>col-6</View>
          </Col>
          <Col span={6} offset={6}>
            <View>offset-6</View>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <View>col-8</View>
          </Col>
          <Col span={8} offset={8}>
            <View>offset-8</View>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <View>col-12 , offset-6</View>
          </Col>
        </Row>
      </Block>
      <Block noTitlePadding title="Grid" className="demo-grid">
        <Grid data={data} columns={3} render={renderGridItem} />
      </Block>
    </Frame>
  );
};
