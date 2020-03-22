import * as React from 'react';
import { View, Picker as APicker } from 'remax/alipay';
import find from 'lodash-es/find';
import get from 'lodash-es/get';
import FormValue from '../form-value';


export interface PickerProps {
  options?: any[];
  value?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
}

const Picker = (props: PickerProps) => {
  const {
    options, 
    value, 
    onChange,
    placeholder,
  } = props;

  const handleChangePicker = (e: any) => {
    onChange?.(options?.[e.detail.value]);
  }
  
  return (
    <View>
      <APicker
        range={options}
        range-key='value'
        onChange={handleChangePicker}
      >
        <FormValue placeholder={placeholder}>
          {get(find(options, { key: value }), 'value')}
        </FormValue>
      </APicker>
    </View>
  );
};

export default Picker;
