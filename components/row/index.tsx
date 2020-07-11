import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('row');

export interface RowProps {
  gutter?: number;
  justify?: string;
  align?: string;
  children?: React.ReactNode;
}

const renderCols = (columns: React.ReactNode, gutter?: number) => {
  const cols = React.Children.map(columns, (column: any, index: number) => {
    let style = gutter ? { marginRight: `${gutter}px` } : null;
    if (!(columns as any).length || index === (columns as any[]).length - 1) {
      style = null;
    }
    return {
      ...column,
      props: {
        ...column.props,
        style,
      },
    };
  });
  return cols;
};

const Row = (props: RowProps) => {
  const { gutter = 0, justify = 'start', align = 'top', children } = props;

  return (
    <View
      className={classNames(prefixCls, {
        [`${prefixCls}-${justify}`]: justify,
        [`${prefixCls}-${align}`]: align,
      })}
    >
      {renderCols(children, gutter)}
    </View>
  );
};

export default Row;
