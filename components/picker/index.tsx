/** @format */

import * as React from 'react';
import { Picker as APicker } from '../one/base';
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
  onChange?: (e: any) => void;
  placeholder?: string;
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
        range={options}
        range-key="value"
        disabled={disabled}
        value={valueIndex}
        onChange={handleChangePicker}
      >
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
      </APicker>
    </Cell>
  );
};

export default Picker;
