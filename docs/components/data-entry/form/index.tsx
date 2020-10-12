import * as React from 'react';
import { Form, Cell, Button, Card } from 'annar';
import { Block, Frame } from '../../common';

export default () => {
  const handleFinish = (values: any) => {
    console.log('values', values);
  };

  const handleFinishFailed = (values: any, errorFields: any) => {
    console.log('errorFields', errorFields);
  };

  return (
    <Frame grayBg padding>
      <Block title="Basic" noTitlePadding>
        <Card contentStyle={{ padding: '20px 0 20px' }}>
          <Form onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
            <Form.Item name="account" rules={[{ required: true }]}>
              <Cell.Input icon="people" label="Account" placeholder="Please enter" border={false} />
            </Form.Item>
            <Form.Item style={{ marginTop: 10, padding: '0 20px' }}>
              <Button
                type="primary"
                size="large"
                shape="square"
                look="secondary"
                block
                nativeType="submit"
              >
                Confirm
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Block>
      <Block title="Rules" noTitlePadding>
        <Card contentStyle={{ padding: '20px 0 20px' }}>
          <Form onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
            <Form.Item
              name="phone"
              rules={[{ pattern: /^1[3456789]\d{9}$/, message: '请输入11位手机号码' }]}
            >
              <Cell.Input label="Phone" placeholder="Please enter" border={false} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ validator: v => v.length >= 6, message: '密码至少6位' }]}
            >
              <Cell.Input label="Password" placeholder="Please enter" border={false} />
            </Form.Item>
            <Form.Item style={{ marginTop: 20, padding: '0 20px' }}>
              <Button
                type="primary"
                size="large"
                shape="square"
                look="orange"
                block
                nativeType="submit"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Block>
    </Frame>
  );
};
