/** @format */

import * as React from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from '../common';
import './index.scss';

const prefixCls = getPrefixCls('radio');

export interface RadioProps {
  children?: React.ReactNode;
  checked?: boolean;
  value?: any;
  extra?: React.ReactNode;
  style?: React.CSSProperties;
  onChange?: (e: any, v?: any) => void;
}

const Radio = (props: RadioProps) => {
  const { children, checked, value, extra, style, onChange } = props;

  const handleClick = () => {
    onChange?.(!checked, value);
  };

  return (
    <View className={prefixCls} style={style}>
      <View className={`${prefixCls}-container`} onTap={handleClick}>
        {checked ? (
          <View className={`${prefixCls}-container-checked`}>
            <View className={`${prefixCls}-container-checked-round_fill`} />
          </View>
        ) : (
          <View className={`${prefixCls}-container-not_checked`} />
        )}
        <View className={`${prefixCls}-container-children`}>{children}</View>
      </View>
      <View className={`${prefixCls}-extra`}>{extra}</View>
    </View>
  );
};

export interface GroupProps {
  value?: any;
  children?: React.ReactNode;
  direction?: string;
  onChange?: (e: any, v: any) => void;
  style?: React.CSSProperties;
}

const getRadios = (
  children: React.ReactNode,
  value?: string,
  onChange?: (e: any, v: any) => void,
) => {
  const radios = React.Children.map(children, (radio: any) => {
    const newRadio = radio;
    let checked = false;
    if (newRadio && newRadio.props) {
      if (
        (newRadio.props.value || newRadio.props.value === 0 || newRadio.props.value === false) &&
        newRadio.props.value === value
      ) {
        checked = true;
      } else {
        checked = false;
      }
      return <Radio {...newRadio.props} checked={checked} onChange={onChange} />;
    }
    return newRadio;
  });

  return radios;
};

Radio.Group = (props: GroupProps) => {
  const { value, children, direction = 'row', onChange, style } = props;

  const radios = getRadios(children, value, onChange);

  return (
    <View
      style={
        {
          display: 'flex',
          flexDirection: direction,
          ...style,
        } as React.CSSProperties
      }
    >
      {radios}
    </View>
  );
};

export default Radio;
