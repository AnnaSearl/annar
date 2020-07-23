import React, { useMemo } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('row');

export interface RowProps {
  gutter?: number;
  justify?: string;
  align?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const renderCols = (columns: React.ReactNode, halfGutter?: number) => {
  const cols = React.Children.map(columns, (column: any) => {
    const style = halfGutter
      ? { paddingLeft: `${halfGutter}px`, paddingRight: `${halfGutter}px` }
      : null;
    return {
      ...column,
      props: {
        ...column.props,
        style: {
          ...column.props.style,
          ...style,
        },
      },
    };
  });
  return cols;
};

const Row = (props: RowProps) => {
  const { gutter = 0, justify = 'start', align = 'top', style, className, children } = props;

  const halfGutter = useMemo(() => gutter / 2, [gutter]);

  return (
    <View
      className={classNames(
        prefixCls,
        {
          [`${prefixCls}-justify-${justify}`]: justify,
          [`${prefixCls}-align-${align}`]: align,
        },
        className,
      )}
      style={{
        ...style,
        marginLeft: `-${halfGutter}px`,
        marginRight: `-${halfGutter}px`,
      }}
    >
      {renderCols(children, halfGutter)}
    </View>
  );
};

export default Row;
