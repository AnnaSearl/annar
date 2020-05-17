import * as React from 'react';
import { View } from 'remax/one';
import { Radio } from 'anna-remax-ui';
import { Block, Frame } from '../../common';

const radioStyle = { paddingBottom: '30px' };

export default () => {
  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(false);
  const [value, setValue] = React.useState(0);

  return (
    <Frame padding>
      <Block title="Basic" noTitlePadding>
        <Radio checked={checked} onChange={v => setChecked(v)}>
          Radio
        </Radio>
      </Block>
      {/* <Block title="Label" noTitlePadding>
        <Radio checked={checked1} onChange={() => setChecked1(v => !v)}>
          Remax
        </Radio>
        <Radio checked={!checked1} onChange={() => setChecked1(v => !v)}>
          Taro
        </Radio>
      </Block> */}
      <Block title="Group" noTitlePadding>
        <Radio.Group value={value} onChange={(c, v) => setValue(v)}>
          <Radio value={0}>Apple</Radio>
          <Radio value={1}>Cherry</Radio>
          <Radio value={2}>Watermelon</Radio>
        </Radio.Group>
      </Block>
      <Block title="Direction & Extra" noTitlePadding>
        <Radio.Group value={value} onChange={(c, v) => setValue(v)} direction="column">
          <Radio value={0} style={radioStyle}>
            Apple
          </Radio>
          <Radio value={1} style={radioStyle}>
            Cherry
          </Radio>
          <Radio
            value={2}
            style={radioStyle}
            extra={
              <View style={{ paddingTop: '24px', color: '#999', fontSize: '26px' }}>
                Watermelon over 50 yuan, get 10 yuan coupon
              </View>
            }
          >
            Watermelon
          </Radio>
        </Radio.Group>
      </Block>
    </Frame>
  );
};
