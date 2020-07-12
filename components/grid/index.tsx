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
  gutter?: number | [number, number?];
  span?: number | number[];
  border?: string;
  render?: (o: any, index?: number, colIndex?: number, rowIndex?: number) => any;
  children?: React.ReactNode;
}

const getColIndex = (two: any[], rindex: number, cindex: number) => {
  const list = two.slice(0, rindex + 1);
  list[rindex] = list[rindex].slice(0, cindex + 1);
  const flatedList = list.flat(Infinity);
  return flatedList.length;
};

const Grid = (props: GridProps) => {
  const { data = [], columns = 4, gutter = 0, span, border, render, children } = props;

  const [two, spanTwo] = useMemo(() => twoDimensional(data, columns, span, 24), [data?.length]);

  let gutterArray: number[] = gutter as number[];
  if (!Array.isArray(gutter)) {
    gutterArray = [gutter];
  }

  return (
    <View className={classNames(prefixCls)}>
      {two?.map((row, rindex) => (
        <Row
          key={rindex}
          gutter={gutterArray[0]}
          className={border && `${prefixCls}-row-border`}
          style={{
            marginBottom: rindex !== two.length - 1 ? `${gutterArray[1]}px` : undefined,
            borderBottom: two.length - 1 !== rindex ? border : undefined,
          }}
        >
          {row?.map((col: any, cindex: number) => (
            <Col
              key={cindex}
              span={spanTwo?.[rindex]?.[cindex]}
              className={border && `${prefixCls}-col-border`}
              style={{ borderRight: row.length - 1 !== cindex ? border : undefined }}
            >
              {render?.(col, getColIndex(spanTwo, rindex, cindex), cindex, rindex) || children}
            </Col>
          ))}
        </Row>
      ))}
    </View>
  );
};

export default Grid;
