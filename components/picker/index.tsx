import * as React from 'react';
import { Picker as APicker } from '../one';
import Cell from '../cell';
import FormValue from '../form-value';
import find from 'lodash-es/find';
import get from 'lodash-es/get';

export interface PickerProps {
  label?: React.ReactNode;
  border?: boolean;
  required?: boolean;
  icon?: string;
  disabled?: boolean;
  pickerAlign?: string;
  options?: any[];
  value?: string;
  placeholder?: string;
  children?: React.ReactNode;
  onChange?: (e: any) => void;
}

const Picker = (props: PickerProps) => {
  const {
    label,
    border,
    required,
    icon,
    pickerAlign = 'left',
    options,
    value,
    onChange,
    placeholder,
    children,
    disabled,
  } = props;

  const handleChangePicker = (e: any) => {
    if (e.detail.value < 0) {
      return;
    }
    onChange?.(options?.[e.detail.value]);
  };

  const valueIndex = options?.findIndex((item: any) => item['key'] === value) || 0;

  return (
    <Cell
      label={label}
      labelStyle={{ width: '180px' }}
      border={border}
      required={required}
      icon={icon}
      field
    >
      <APicker
        wechat-mode="selector"
        range={options}
        rangeKey="value"
        disabled={disabled}
        value={valueIndex}
        onChange={handleChangePicker}
      >
        {children || children === 0 ? (
          children
        ) : (
          <FormValue
            placeholder={placeholder}
            style={
              {
                textAlign: pickerAlign,
              } as React.CSSProperties
            }
          >
            {get(find(options, { key: value }), 'value')}
          </FormValue>
        )}
      </APicker>
    </Cell>
  );
};

export default Picker;
