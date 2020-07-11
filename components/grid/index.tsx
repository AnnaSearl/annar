import React, { useMemo } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import Row from '../row';
import Col from '../col';
import { twoDimensional } from '../_util';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('grid');

export interface GridProps {
  data?: any[];
  columns?: number;
  render?: (o: any) => any;
  children?: React.ReactNode;
}

const Grid = (props: GridProps) => {
  const { data = [], columns = 4, render, children } = props;

  const gridData = useMemo(() => twoDimensional(data, columns), [data?.length]);
  const span = useMemo(() => 24 / columns, [columns]);

  return (
    <View className={classNames(prefixCls)}>
      {gridData?.map((row, index) => (
        <Row key={index}>
          {row.map((col: any, cindex: number) => (
            <Col key={cindex} span={span}>
              {render?.(col) || children}
            </Col>
          ))}
        </Row>
      ))}
    </View>
  );
};

export default Grid;
