import * as React from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('radio');

type RadioValue = string | number;

export interface RadioProps {
  children?: React.ReactNode;
  checked?: boolean;
  value?: RadioValue;
  extra?: React.ReactNode;
  style?: React.CSSProperties;
  onChange?: (checked: boolean, e?: any, v?: RadioValue) => void;
}

const Radio = (props: RadioProps) => {
  const { children, checked, value, extra, style, onChange } = props;

  const handleClick = (e: any) => {
    onChange?.(!checked, e, value);
  };

  return (
    <View className={prefixCls} style={style}>
      <View className={`${prefixCls}-container`} onTap={handleClick}>
        <View
          className={classNames(`${prefixCls}-out-round`, {
            [`${prefixCls}-out-round-checked`]: checked,
          })}
        >
          {checked ? <View className={`${prefixCls}-inner-round`} /> : null}
        </View>
        <View className={`${prefixCls}-children`}>{children}</View>
      </View>
      <View className={`${prefixCls}-extra`}>{extra}</View>
    </View>
  );
};

const getRadios = (
  children: React.ReactNode,
  value?: RadioValue,
  onChange?: (v: RadioValue, e?: any) => void,
) => {
  const onGroupChange = (checked: any, e: any, v: RadioValue) => {
    const newValue = v;
    onChange?.(newValue as RadioValue, e);
  };
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
      return <Radio {...newRadio.props} checked={checked} onChange={onGroupChange} />;
    }
    return newRadio;
  });

  return radios;
};

export interface GroupProps {
  value?: RadioValue;
  children?: React.ReactNode;
  direction?: string;
  onChange?: (v: RadioValue, e?: any) => void;
  style?: React.CSSProperties;
}

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
