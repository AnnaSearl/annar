import * as React from 'react';
import { View } from 'remax/one';
import { Row, Col } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import './index.scss';

export default () => {
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
    </Frame>
  );
};
