import * as React from 'react';
import { Input, Button, Icon, Cell } from 'annar';
import { Block, Frame, Br } from '../../common';

const cStyle = { padding: '0 400px 0 20px' };

export default () => {
  return (
    <Frame grayBg>
      <Block title="Basic" contentStyle={cStyle}>
        <Input placeholder="Please enter" border={false} />
      </Block>

      <Block title="Type" contentStyle={cStyle}>
        <Input placeholder="number" type="number" />
      </Block>

      <Block title="Size" contentStyle={cStyle}>
        <Input placeholder="large" size="large" />
        <Br />
        <Input placeholder="default" />
        <Br />
        <Input placeholder="small" size="small" />
      </Block>

      <Block title="Prefix" contentStyle={cStyle}>
        <Input placeholder="Acount" align="right" prefix={<Icon type="people" size="32px" />} />
        <Br />
        <Input placeholder="Phone" align="right" type="number" prefix="+86" />
      </Block>

      <Block title="Suffix" contentStyle={cStyle}>
        <Input placeholder="Email" suffix={<Icon type="mail" size="32px" />} />
        <Br />
        <Input placeholder="Amount" type="number" suffix="元" />
      </Block>

      <Block title="MaxLength" contentStyle={cStyle}>
        <Input placeholder="You can input 4 charapter" maxLength={4} />
      </Block>

      <Block title="Align" contentStyle={cStyle}>
        <Input placeholder="Please enter" align="right" />
      </Block>

      <Block title="Disabled" contentStyle={cStyle}>
        <Input disabled placeholder="Please enter" value="read only" />
        <Br />
        <Input disabled placeholder="Has been disabled" />
      </Block>

      <Block title="Cell.Input">
        <Cell.Input placeholder="Please enter" border={false} />
        <Br />
        <Cell.Input label="Text" placeholder="Please enter" border={false} />
        <Br />
        <Cell.Input
          label="location"
          placeholder="Please enter"
          icon="location"
          align="right"
          border={false}
        />
        <Br />
        <Cell.Input required label="Amount" placeholder="Please enter" extra="元" />
        <Br />
        <Cell.Input
          required
          label="phone"
          placeholder="Please enter"
          border={false}
          extra={
            <Button type="primary" size="small">
              Send Code
            </Button>
          }
        />
      </Block>
    </Frame>
  );
};
