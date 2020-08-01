import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('card');

export interface CardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  foot?: React.ReactNode;
  cover?: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  shadow?: boolean;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  children?: React.ReactNode;
  onTap?: (e: any) => void;
}

const Card = (props: CardProps) => {
  const {
    title,
    description,
    extra,
    cover,
    foot,
    direction = 'vertical',
    shadow,
    style,
    contentStyle,
    children,
    onTap,
  } = props;

  const renderTitle = (isHead: boolean) => {
    return title || description || extra ? (
      <View className={classNames(`${prefixCls}-head`, { [`${prefixCls}-content-head`]: !isHead })}>
        <View>
          {title ? <View className={`${prefixCls}-title`}>{title}</View> : null}
          {description ? <View className={`${prefixCls}-description`}>{description}</View> : null}
        </View>
        <View className={`${prefixCls}-extra`}>{extra}</View>
      </View>
    ) : null;
  };

  const renderHead = () => {
    if (cover) {
      return <View className={`${prefixCls}-cover`}>{cover}</View>;
    }
    return renderTitle(true);
  };

  const renderFoot = () => {
    return foot ? (
      <View
        className={classNames(`${prefixCls}-foot`, {
          [`${prefixCls}-foot-horizontal`]: direction === 'horizontal',
        })}
      >
        {foot}
      </View>
    ) : null;
  };

  return (
    <View
      className={classNames(prefixCls, {
        [`${prefixCls}-horizontal`]: cover && direction === 'horizontal',
        [`${prefixCls}-shadow`]: shadow,
      })}
      style={style}
      onTap={onTap}
    >
      {renderHead()}
      <View
        className={`${prefixCls}-content`}
        style={{
          ...contentStyle,
        }}
      >
        {cover ? renderTitle(false) : null}
        {children}
        {direction === 'horizontal' ? renderFoot() : null}
      </View>
      {direction !== 'horizontal' ? renderFoot() : null}
    </View>
  );
};

export default Card;
