import * as React from 'react';
import { Input, Button } from 'anna-remax-ui';
import { Block, Frame } from '../../common';

export default () => {
  return (
    <Frame grayBg>
      <Block title="Basic">
        <Input placeholder="Please enter" border={false} />
      </Block>
      <Block title="With Label">
        <Input label="Text" placeholder="Please enter" border={false} />
      </Block>
      <Block title="maxLength">
        <Input label="Text" placeholder="You can input 4 charapter" maxLength={4} />
      </Block>
      <Block title="inputAlign">
        <Input label="Text" placeholder="Please enter" border={false} inputAlign="right" />
      </Block>
      <Block title="Type">
        <Input label="Number" placeholder="Please enter" border={false} type="number" />
      </Block>
      <Block title="Disabled">
        <Input label="Text" disabled placeholder="Please enter" value="read only" />
        <Input label="Text" disabled placeholder="Has been disabled" border={false} />
      </Block>
      <Block title="With Required">
        <Input label="Phone" placeholder="Please enter" border={false} required />
      </Block>
      <Block title="With Icon">
        <Input label="location" placeholder="Please enter" border={false} icon="location" />
      </Block>
      <Block title="With Extra">
        <Input label="Amount" placeholder="Please enter" extra="元" />
        <Input
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
