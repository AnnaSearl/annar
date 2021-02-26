import * as React from 'react';
import { Text } from 'remax/one';
import { Button, DatePicker, Cell } from 'annar';
import { Block, Frame } from '../../common';

export default () => {
  const [value, setValue] = React.useState(undefined);
  const [value1, setValue1] = React.useState(undefined);
  const [value2, setValue2] = React.useState(undefined);
  const [value3, setValue3] = React.useState(undefined);

  return (
    <Frame grayBg style={{ overflow: 'hidden' }}>
      <Block title="Basic" contentStyle={{ paddingLeft: '20px' }}>
        <DatePicker value={value} onChange={v => setValue(v)}>
          <Button type="primary" shape="square" plain hairline>
            选择日期
          </Button>
          <Text style={{ marginLeft: '30px' }}>{value}</Text>
        </DatePicker>
      </Block>
      <Block title="Type = date">
        <DatePicker value={value1} onChange={v => setValue1(v)}>
          <Cell label="Date" placeholder="Please choose" align="right" arrow>
            {value1}
          </Cell>
        </DatePicker>
      </Block>
      <Block title="Type = time">
        <DatePicker type="time" value={value2} onChange={v => setValue2(v)}>
          <Cell label="Date" placeholder="Please choose" align="right" arrow>
            {value2}
          </Cell>
        </DatePicker>
      </Block>
      <Block title="Type = datetime">
        <DatePicker type="datetime" value={value3} onChange={v => setValue3(v)}>
          <Cell label="Date" placeholder="Please choose" align="right" arrow>
            {value3}
          </Cell>
        </DatePicker>
      </Block>
    </Frame>
  );
};
