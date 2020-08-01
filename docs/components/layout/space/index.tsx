import * as React from 'react';
import { View } from 'remax/one';
import { Space, Tag, Button } from 'anna-remax-ui';
import { Block, Frame } from '../../common';

export default () => {
  return (
    <Frame padding>
      <Block noTitlePadding title="Basic">
        <Space>
          <Tag size="large">Anna</Tag>
          <Tag size="large">Eurus</Tag>
          <Tag size="large">Ibuki</Tag>
          <Tag size="large">Melos</Tag>
        </Space>
      </Block>
      <Block noTitlePadding title="Size">
        <Space>
          <Button shape="square" plain hairline>
            申请取消
          </Button>
          <Button shape="square" plain hairline>
            申请退货
          </Button>
          <Button type="primary" shape="square" plain hairline>
            确认收货
          </Button>
        </Space>
        <View style={{ height: 12 }} />
        <Space size="middle">
          <Button shape="square" plain hairline>
            申请取消
          </Button>
          <Button shape="square" plain hairline>
            申请退货
          </Button>
          <Button type="primary" shape="square" plain hairline>
            确认收货
          </Button>
        </Space>
        <View style={{ height: 12 }} />
        <Space size="large">
          <Button shape="square" plain hairline>
            申请取消
          </Button>
          <Button shape="square" plain hairline>
            申请退货
          </Button>
          <Button type="primary" shape="square" plain hairline>
            确认收货
          </Button>
        </Space>
      </Block>
      <Block noTitlePadding title="Direction">
        <Space direction="vertical">
          <Tag size="large">Anna</Tag>
          <Tag size="large">Eurus</Tag>
          <Tag size="large">Ibuki</Tag>
          <Tag size="large">Melos</Tag>
        </Space>
      </Block>
      <Block noTitlePadding title="Align">
        <Space>
          center
          <Tag size="large">Anna</Tag>
          <Tag size="large">Eurus</Tag>
          <Button shape="square" plain hairline>
            Ibuki
          </Button>
        </Space>
        <View style={{ height: 24 }} />
        <Space align="start">
          start
          <Tag size="large">Anna</Tag>
          <Tag size="large">Eurus</Tag>
          <Button shape="square" plain hairline>
            Ibuki
          </Button>
        </Space>
        <View style={{ height: 24 }} />
        <Space align="end">
          end
          <Tag size="large">Anna</Tag>
          <Tag size="large">Eurus</Tag>
          <Button shape="square" plain hairline>
            Ibuki
          </Button>
        </Space>
        <View style={{ height: 24 }} />
        <Space align="baseline">
          baseline
          <Tag size="large">Anna</Tag>
          <Tag size="large">Eurus</Tag>
          <Button shape="square" plain hairline>
            Ibuki
          </Button>
        </Space>
      </Block>
    </Frame>
  );
};
