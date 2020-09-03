import * as React from 'react';
import { View, Text } from 'remax/one';
import classNames from 'classnames';
import Icon from '../icon';
import FormValue from '../form-value';
import Picker from '../picker';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('cell');

export interface CellProps {
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

const Cell = (props: CellProps) => {
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

export interface CellPickerProps extends CellProps {
  range?: any[];
  rangeKey?: string;
  disabled?: boolean;
  [propName: string]: any;
}

Cell.Picker = (props: CellPickerProps) => {
  const {
    label,
    border,
    required,
    icon,
    align = 'left',
    value,
    onChange,
    placeholder,
    children,
    disabled,
    range,
    rangeKey = 'text',
  } = props;

  let selectedText = '';
  if (Array.isArray(value)) {
    const selected = value.map((i, columnIndex) => range?.[columnIndex]?.[i]);
    selectedText = selected
      .map((i: any) => (typeof i === 'object' ? i[rangeKey] || '' : i))
      .join(' ');
  } else {
    const selected = range?.[value];
    selectedText = typeof selected === 'object' ? selected[rangeKey] || '' : selected;
  }

  return (
    <Cell
      label={label}
      labelStyle={{ width: '180px' }}
      border={border}
      required={required}
      icon={icon}
      {...props}
    >
      <Picker
        range={range}
        rangeKey={rangeKey}
        disabled={disabled}
        value={value}
        onChange={onChange}
      >
        {children ?? (
          <FormValue
            placeholder={placeholder}
            style={
              {
                textAlign: align,
                color: disabled ? '#999' : undefined,
              } as React.CSSProperties
            }
          >
            {selectedText}
          </FormValue>
        )}
      </Picker>
    </Cell>
  );
};

export default Cell;
