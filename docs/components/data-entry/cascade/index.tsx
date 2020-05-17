import React, { useRef } from 'react';
import { View } from 'remax/one';
import { Cascade, CascadePopup, Cell, Filter } from 'anna-remax-ui';
import { Block, Frame } from '../../common';
import { Categorys } from '../../mock';

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
  const [selector, setSelector] = React.useState<any[]>([]);
  const [selector1, setSelector1] = React.useState<any[]>([]);
  const [selector2, setSelector2] = React.useState<any[]>([]);

  const [value3, setValue3] = React.useState('0');

  const handleChangeCategory = (value: any[], last: any) => {
    setSelector(value);
  };

  const handleCompleteCategory = (value: any[], last: any) => {};

  const handleChangeCategory1 = (value: any[], last: any) => {
    setSelector1(value);
  };

  const handleCompleteCategory1 = (value: any[], last: any) => {};

  // Filter
  const seletorRef = useRef<any>();
  const handleChangeCategory2 = (value: any, valueStr: any) => {
    setSelector2(value);
  };
  const handleCompleteCategory2 = (value: any, valueStr: any) => {
    seletorRef.current.toggle();
  };

  return (
    <Frame grayBg style={{ overflow: 'hidden' }}>
      <Block title="Basic">
        <Cascade
          name="品类"
          options={Categorys}
          onChange={handleChangeCategory}
          onComplete={handleCompleteCategory}
          value={selector}
        />
      </Block>
      <Block title="With Filter">
        <Filter zIndex={998}>
          <Filter.Item title="品类" ref={seletorRef}>
            <Cascade
              name="品类"
              options={Categorys}
              onChange={handleChangeCategory2}
              onComplete={handleCompleteCategory2}
              value={selector2}
            />
          </Filter.Item>
          <Filter.Item
            label="价格"
            value={value3}
            options={options1}
            onChange={e => setValue3(e.key)}
          />
        </Filter>
      </Block>
      <View style={{ height: '500px' }} />
      <Block title="With Cell and Popup">
        <Cell label="品类" arrow>
          <CascadePopup
            name="品类"
            placeholder="请选择"
            options={Categorys}
            onChange={handleChangeCategory1}
            onComplete={handleCompleteCategory1}
            value={selector1}
            height="1024px"
          />
        </Cell>
      </Block>
    </Frame>
  );
};
