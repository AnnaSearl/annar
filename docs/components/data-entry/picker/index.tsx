import * as React from 'react';
import { View } from 'remax/one';
import { Picker, Button, Cell, PickerView, PickerViewColumn } from 'annar';
import { Block, Frame } from '../../common';
import styles from './index.module.scss';

const data = ['不想要了', '未按规定时间发货', '数量下多了', '商品下错了'];

const data1 = [
  ['Remax', 'Taro', 'Mpvue'],
  ['Annar', 'Vant', 'WeUI'],
];

const data2 = ['Annar', 'Rsuite', 'BaseUI', 'Vant', 'WeUI'];

const data3 = [
  [
    { key: '1', value: 'Waccking' },
    { key: '2', value: 'Hiphop' },
    { key: '3', value: 'Popping' },
  ],
  [
    { key: '1', value: 'Ibuki' },
    { key: '2', value: 'Hans' },
    { key: '3', value: 'Wacoon' },
  ],
];

export default () => {
  const [value, setValue] = React.useState(-1);
  const [value1, setValue1] = React.useState([-1, -1]);
  const [value2, setValue2] = React.useState(-1);
  const [value3, setValue3] = React.useState([0, 0]);
  const [value4, setValue4] = React.useState(0);

  return (
    <Frame grayBg style={{ overflow: 'hidden' }}>
      <Block title="Basic" contentStyle={{ paddingLeft: '20px' }}>
        <Picker value={value} onChange={v => setValue(v)} range={data}>
          <Button type="primary" shape="square" plain hairline>
            申请退货
          </Button>
        </Picker>
      </Block>
      <Block title="Multi Column" contentStyle={{ paddingLeft: '20px' }}>
        <Picker value={value1} onChange={(v: any) => setValue1(v)} range={data1}>
          <Button type="primary" shape="square" plain hairline>
            选择方案
          </Button>
        </Picker>
      </Block>
      <Block title="Cell.Picker">
        <Cell.Picker
          required
          label="Scheme"
          placeholder="Please choose"
          align="right"
          arrow
          range={data2}
          value={value2}
          onChange={(v: any) => setValue2(v)}
        />
      </Block>
      <Block title="RangeKey">
        <Cell.Picker
          icon="musicfill"
          label="LINE UP"
          placeholder="Please choose"
          align="right"
          arrow
          range={data3}
          rangeKey="value"
          value={value3}
          onChange={(v: any) => setValue3(v)}
        />
      </Block>
      <Block title="Disabled">
        <Cell.Picker
          label="Scheme"
          placeholder="Please choose"
          align="right"
          arrow
          range={data2}
          value={value4}
          onChange={(v: any) => setValue4(v)}
          disabled
        />
      </Block>
      <Block title="PickerView & PickerViewColumn">
        <View className={styles.subTitle}>
          Annar为用户提供 PickerView 及 PickerViewColumn，方便用户自定义Picker
        </View>
        <PickerView>
          <PickerViewColumn options={['装饰片', '刺绣', '织带']} />
          <PickerViewColumn options={['白色', '米色', '黑色']} />
          <PickerViewColumn options={['圆形', '方形']} />
        </PickerView>
      </Block>
    </Frame>
  );
};
