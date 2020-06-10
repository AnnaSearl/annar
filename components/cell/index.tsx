import * as React from 'react';
import { View, Text } from 'remax/one';
import classNames from 'classnames';
import Icon from '../icon';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('cell');

export interface ItemProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  description?: React.ReactNode;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  valueStyle?: React.CSSProperties;
  verticality?: boolean;
  icon?: string;
  required?: boolean;
  border?: boolean;
  arrow?: boolean;
  field?: boolean;
  defaultNullValue?: string;
  onTap?: () => void;
}

const Cell = (props: ItemProps) => {
  const {
    label,
    style,
    labelStyle,
    valueStyle,
    children,
    description,
    verticality,
    icon,
    border = true,
    arrow,
    required,
    field,
    defaultNullValue = '',
    onTap,
  } = props;

  if (verticality) {
    return (
      <View className={prefixCls} style={style} onTap={onTap}>
        <View className={`${prefixCls}-verticality`}>
          {label ? (
            <View className={`${prefixCls}-verticality-label`} style={labelStyle}>
              {required ? <Text className={`${prefixCls}-verticality-required`}>*</Text> : null}
              {label}
            </View>
          ) : null}
          <View className={`${prefixCls}-verticality-value`} style={valueStyle}>
            {children}
          </View>
        </View>
      </View>
    );
  }

  return (
    <View className={prefixCls} style={style} onTap={onTap}>
      <View className={`${prefixCls}-container`}>
        <View className={`${prefixCls}-container-main`}>
          <View
            className={classNames(`${prefixCls}-container-main-left`, {
              [`${prefixCls}-container-main-left-input`]: field,
            })}
          >
            <View className={`${prefixCls}-container-main-left-label`}>
              {required ? (
                <Text className={`${prefixCls}-container-main-left-label-required`}>*</Text>
              ) : null}
              {icon ? (
                <Icon type={icon} size="32px" style={{ marginRight: '10px' }} color="#333" />
              ) : null}
              {label ? (
                <Text className={`${prefixCls}-container-main-left-label-value`} style={labelStyle}>
                  {label}
                </Text>
              ) : null}
            </View>
          </View>
          <View className={`${prefixCls}-container-main-right`}>
            <View className={`${prefixCls}-container-main-right-value`} style={valueStyle}>
              {children || children === 0 ? children : defaultNullValue}
            </View>
            {arrow ? <Icon type="right" style={{ marginLeft: '10px' }} color="#666" /> : null}
          </View>
        </View>
        {description ? (
          <View className={`${prefixCls}-container-description`}>{description}</View>
        ) : null}
      </View>
      {border ? <View className={`${prefixCls}-border`} /> : null}
    </View>
  );
};

export default Cell;
