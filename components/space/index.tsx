import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('space');

export interface SpaceProps {
  size?: string | number;
  direction?: string;
  align?: string;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const renderItems = (children: React.ReactNode, size?: string | number, direction?: string) => {
  let itemStyle: React.CSSProperties | undefined = undefined;
  if (typeof size === 'number') {
    itemStyle =
      direction === 'vertical'
        ? {
            marginBottom: size,
          }
        : {
            marginRight: size,
          };
  }
  const items: any[] = [];
  React.Children.forEach(children, (child: any, index: number) => {
    const itemCn = classNames(`${prefixCls}-item`, {
      [`${prefixCls}-${direction}-${size}`]: typeof size === 'string' && size,
    });
    if (child === undefined || child === null) {
      return;
    }
    items.push(
      <View key={index} className={itemCn} style={itemStyle}>
        {child}
      </View>,
    );
  });
  return items;
};

const Space: React.FC<SpaceProps> = (props: SpaceProps) => {
  const {
    size = 'small',
    direction = 'horizontal',
    align = direction === 'horizontal' ? 'center' : undefined,
    style,
    className,
    children,
  } = props;

  const cn = classNames(
    prefixCls,
    `${prefixCls}-${direction}`,
    {
      [`${prefixCls}-align-${align}`]: align,
    },
    className,
  );

  return (
    <View className={cn} style={style}>
      {renderItems(children, size, direction)}
    </View>
  );
};

export default Space;
