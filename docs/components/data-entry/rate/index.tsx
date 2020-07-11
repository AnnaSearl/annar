import * as React from 'react';
import { View } from 'remax/one';
import { Rate } from 'anna-remax-ui';
import { Block, Frame } from '../../common';

export default () => {
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [value3, setValue3] = React.useState(4);
  const [value4, setValue4] = React.useState(3);
  const [value5, setValue5] = React.useState(2);
  const [value6, setValue6] = React.useState(2);
  const [value7, setValue7] = React.useState(2);

  return (
    <Frame padding>
      <Block noTitlePadding title="Basic">
        <Rate value={value} onChange={v => setValue(v)} />
      </Block>
      <Block noTitlePadding title="Custome Icon">
        <Rate
          icon="evaluate"
          iconFill="evaluate_fill"
          value={value5}
          onChange={v => setValue5(v)}
        />
      </Block>
      <Block noTitlePadding title="Color">
        <Rate
          color="#FF7777"
          icon="appreciate"
          iconFill="appreciatefill"
          value={value6}
          onChange={v => setValue6(v)}
        />
      </Block>
      <Block noTitlePadding title="Size">
        <Rate size="60px" value={value7} onChange={v => setValue7(v)} />
      </Block>
      <Block noTitlePadding title="Count">
        <Rate count={6} value={value3} onChange={v => setValue3(v)} />
      </Block>
      <Block noTitlePadding title="ReadOnly">
        <Rate readOnly value={value4} onChange={v => setValue4(v)} />
      </Block>
      <Block noTitlePadding title="With Label">
        <View style={{ marginBottom: '20px' }}>
          <Rate label="物流服务" value={value1} onChange={v => setValue1(v)} />
        </View>
        <View>
          <Rate label="服务态度" value={value2} onChange={v => setValue2(v)} />
        </View>
      </Block>
    </Frame>
  );
};
