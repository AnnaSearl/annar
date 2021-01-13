import * as React from 'react';
import {
  Form,
  Cell,
  Button,
  Card,
  Radio,
  Checkbox,
  DatePicker,
  CascadePopup,
  ImageUpload,
  Switch,
  Row,
  Col,
} from 'annar';
import { Block, Frame } from '../../common';
import { Categorys } from '../../mock';

export default () => {
  const [form] = Form.useForm();

  const handleFinish = (values: any) => {
    console.log('values', values);
  };

  const handleFinishFailed = (values: any, errorFields: any) => {
    console.log('errorFields', errorFields);
  };

  const handleReset = () => {
    form.resetFields({
      name: '',
    });
  };

  const handleSetFieldsValue = () => {
    form.setFieldsValue({
      name: 'Anna',
      gender: 1,
      level: [0],
      city: 0,
      photo: ['https://smebimage.fuliaoyi.com/FoMXNlKdZt9UqufDkPony8ztWKsU'],
      anonymous: true,
    });
  };

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <Frame grayBg padding style={{ overflow: 'hidden' }}>
      <Block title="Basic" noTitlePadding>
        <Card contentStyle={{ padding: '20px 0 20px' }}>
          <Form onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
            <Form.Item noStyle name="account" rules={[{ required: true }]}>
              <Cell.Input icon="people" label="Account" placeholder="Please enter" border={false} />
            </Form.Item>
            <Form.Item noStyle style={{ marginTop: 10, padding: '0 20px' }}>
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
              noStyle
              name="phone"
              rules={[{ pattern: /^1[3456789]\d{9}$/, message: '请输入11位手机号码' }]}
            >
              <Cell.Input label="Phone" placeholder="Please enter" border={false} />
            </Form.Item>
            <Form.Item
              noStyle
              name="password"
              rules={[{ validator: (v: string) => v?.length >= 6, message: '密码至少6位' }]}
            >
              <Cell.Input label="Password" placeholder="Please enter" border={false} />
            </Form.Item>
            <Form.Item noStyle style={{ marginTop: 20, padding: '0 20px' }}>
              <Button type="primary" size="large" shape="square" block nativeType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Block>
      <Block title="UseForm" noTitlePadding>
        <Card contentStyle={{ padding: '20px 0 20px' }}>
          <Form form={form} onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
            <Form.Item noStyle name="name" rules={[{ required: true }]}>
              <Cell.Input label="Name" placeholder="Please enter your name" border={false} />
            </Form.Item>

            <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value={0}>Male</Radio>
                <Radio value={1}>Female</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="level" label="Level" rules={[{ required: true }]}>
              <Checkbox.Group>
                <Checkbox value={0}>A</Checkbox>
                <Checkbox value={1}>B</Checkbox>
                <Checkbox value={2}>C</Checkbox>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item noStyle name="city" rules={[{ required: true }]}>
              <Cell.Picker
                label="City"
                placeholder="Please choose your city"
                range={['上海', '北京', '杭州', '深圳']}
                border={false}
              />
            </Form.Item>

            <Form.Item label="Date" name="date" rules={[{ required: true }]}>
              <DatePicker>{v => v}</DatePicker>
            </Form.Item>

            <Form.Item label="Category" name="category" rules={[{ required: true }]}>
              <CascadePopup
                name="品类"
                placeholder="Please choose category"
                options={Categorys}
                height="700px"
              />
            </Form.Item>

            <Form.Item
              label="Photo"
              name="photo"
              valuePropName="files"
              rules={[{ required: true }]}
            >
              <ImageUpload />
            </Form.Item>

            <Form.Item
              label="Anonymous"
              name="anonymous"
              valuePropName="checked"
              valueAlign="left"
              rules={[{ required: true }]}
            >
              <Switch small />
            </Form.Item>

            <Row gutter={8} style={{ padding: '0 20px' }}>
              <Col span={7}>
                <Button
                  size="large"
                  shape="square"
                  plain
                  hairline
                  color="#ff4f00"
                  block
                  onTap={handleReset}
                >
                  Reset
                </Button>
              </Col>
              <Col span={7}>
                <Button
                  size="large"
                  shape="square"
                  plain
                  hairline
                  color="#ff4f00"
                  block
                  onTap={handleSetFieldsValue}
                >
                  Set
                </Button>
              </Col>
              <Col span={10}>
                <Button size="large" shape="square" look="orange" block onTap={handleSubmit}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Block>
    </Frame>
  );
};
