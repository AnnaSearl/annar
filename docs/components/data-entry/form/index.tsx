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
            <Form.Item name="phone" rules={[{ pattern: /\d{1}/ }]}>
              <Cell.Input label="Phone" placeholder="Please enter" border={false} />
            </Form.Item>
            <Form.Item name="password" rules={[{ validator: v => v > 3 }]}>
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
