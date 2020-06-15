import * as React from 'react';
import { Picker } from 'anna-remax-ui';
import { Block, Frame } from '../../common';

const options = [
  { key: '1', value: 'Remax' },
  { key: '2', value: 'Taro' },
  { key: '3', value: 'Nanachi' },
  { key: '4', value: 'Uni-app' },
  { key: '5', value: 'Mpvue' },
];

export default () => {
  const [value, setValue] = React.useState('0');
  const [value1, setValue1] = React.useState('0');
  const [value2, setValue2] = React.useState('0');
  const [value3, setValue3] = React.useState('0');
  const [value4, setValue4] = React.useState('0');

  return (
    <Frame grayBg style={{ overflow: 'hidden' }}>
      <Block title="Basic">
        <Picker
          value={value}
          onChange={v => setValue(v.key)}
          options={options}
          placeholder="Please choose"
        />
      </Block>
      <Block title="With Label">
        <Picker
          label="Scheme"
          value={value1}
          onChange={v => setValue1(v.key)}
          options={options}
          placeholder="Please choose"
        />
      </Block>
      <Block title="pickerAlign">
        <Picker
          label="Scheme"
          value={value2}
          onChange={v => setValue2(v.key)}
          options={options}
          placeholder="Please choose"
          pickerAlign="right"
        />
      </Block>
      <Block title="Disabled">
        <Picker label="Scheme" options={options} placeholder="Has been disabled" disabled />
      </Block>
      <Block title="With Required">
        <Picker
          required
          label="Scheme"
          value={value3}
          onChange={v => setValue3(v.key)}
          options={options}
          placeholder="Please choose"
        />
      </Block>
      <Block title="With Icon">
        <Picker
          icon="likefill"
          label="Favorite"
          value={value4}
          onChange={v => setValue4(v.key)}
          options={options}
          placeholder="Please choose"
        />
      </Block>
    </Frame>
  );
};
