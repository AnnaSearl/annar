import * as React from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from '../common';
import Icon from '../icon';

const prefixCls = getPrefixCls('checkbox');

type CheckboxValue = string | number;

export interface CheckboxProps {
  checked?: boolean;
  value?: CheckboxValue;
  extra?: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onChange?: (checked: any, e?: any, v?: CheckboxValue) => void;
  onGroupChange?: (v: CheckboxValue[], e?: any) => void;
}

const Checkbox = (props: CheckboxProps) => {
  const { children, checked, value, extra, style, onChange } = props;

  const handleClick = (e: any) => {
    onChange?.(!checked, e, value);
  };

  return (
    <View className={prefixCls} style={style}>
      <View className={`${prefixCls}-container`} onTap={handleClick}>
        {checked ? (
          <Icon type="roundcheckfill" size="48px" color="#1890FF" />
        ) : (
          <Icon type="round" size="48px" color="#999" />
        )}
        {children ? <View className={`${prefixCls}-container-label`}>{children}</View> : null}
      </View>
      <View className={`${prefixCls}-extra`}>{extra}</View>
    </View>
  );
};

const getCheckboxs = (
  children: React.ReactNode,
  value: CheckboxValue[] = [],
  onChange?: (v: CheckboxValue[], e?: any) => void,
) => {
  const onGroupChange = (checked: any, e: any, v: CheckboxValue) => {
    const newValue = value?.includes(v) ? value?.filter(i => i !== v) : value?.concat(v);
    onChange?.(newValue, e);
  };
  const checkboxs = React.Children.map(children, (checkbox: any) => {
    const p = checkbox?.props || {};
    let checked = p.checked;
    if ((p.value || p.value === 0) && (value as CheckboxValue[])?.includes(p.value)) {
      checked = !checked;
    }
    return {
      ...checkbox,
      props: {
        ...checkbox.props,
        checked,
        onChange: onGroupChange,
      },
    };
  });

  return checkboxs;
};

export interface GroupProps {
  value?: CheckboxValue[];
  children?: React.ReactNode;
  direction?: string;
  onChange?: (v: CheckboxValue[]) => void;
}

Checkbox.Group = (props: GroupProps) => {
  const { value = [], children, direction = 'row', onChange } = props;

  const checkboxs = getCheckboxs(children, value, onChange);

  return (
    <View
      style={
        {
          display: 'flex',
          flexDirection: direction,
        } as React.CSSProperties
      }
    >
      {checkboxs}
    </View>
  );
};

export default Checkbox;

// 注意不要加 React.memo，会导致保错。
