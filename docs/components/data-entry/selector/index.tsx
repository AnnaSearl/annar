import React, { useRef } from 'react';
import { View } from 'remax/one';
import { Selector, SelectorPopup, Cell, Filter } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import { ReturnDeliveryWay } from '../../mock';

const options1 = [
  {
    key: '0',
    value: '1000',
  },
  {
    key: '1',
    value: '2000',
  },
  {
    key: '2',
    value: '3000',
  },
];

export default () => {
  const [selector, setSelector] = React.useState({
    value: [],
    valueStr: null,
  });
  const [selector1, setSelector1] = React.useState({
    value: [],
    valueStr: null,
  });
  const [selector2, setSelector2] = React.useState({
    value: [],
    valueStr: null,
  });
  const [value3, setValue3] = React.useState('0');

  const handleChange = (value: any, valueStr: any) => {
    setSelector({
      value,
      valueStr,
    });
  };

  const handleChange1 = (value: any, valueStr: any) => {
    setSelector1({
      value,
      valueStr,
    });
  };

  // Filter
  const seletorRef = useRef<any>();
  const handleChange2 = (value: any, valueStr: any) => {
    setSelector2({
      value,
      valueStr,
    });
    seletorRef.current.toggle();
  };

  return (
    <Frame grayBg style={{ overflow: 'hidden' }}>
      <Block title="Basic">
        <View style={{ backgroundColor: '#FDFFFD' }}>
          <Selector options={ReturnDeliveryWay} onChange={handleChange} value={selector.value} />
        </View>
      </Block>
      <Block title="With Filter">
        <View style={{ backgroundColor: '#FDFFFD' }}>
          <Filter zIndex={998}>
            <Filter.Item title="配送方式" ref={seletorRef}>
              <Selector
                options={ReturnDeliveryWay}
                onChange={handleChange2}
                value={selector2.value}
              />
            </Filter.Item>
            <Filter.Item
              label="价格"
              value={value3}
              options={options1}
              onChange={e => setValue3(e.key)}
            />
          </Filter>
        </View>
      </Block>
      <Block title="With Cell and Popup">
        <Cell label="配送方式" arrow>
          <SelectorPopup
            options={ReturnDeliveryWay}
            onChange={handleChange1}
            value={selector1.value}
            title="配送方式"
            placeholder="请选择"
          >
            {selector1.valueStr}
          </SelectorPopup>
        </Cell>
      </Block>
    </Frame>
  );
};
