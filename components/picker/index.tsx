import React, { useState } from 'react';
import { View } from 'remax/one';
import Popup from '../popup';
import PickerView from '../picker-view';
import PickerViewColumn from '../picker-view-column';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('picker');

export interface PickerProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

const Picker = (props: PickerProps) => {
  const { disabled, children } = props;

  const [open, setOpen] = useState(false);

  const handleTap = () => {
    if (disabled) {
      return;
    }
    setOpen(state => !state);
  };

  return (
    <View className={prefixCls}>
      <View onTap={handleTap}>{children}</View>
      <Popup position="bottom" open={open} onClose={() => setOpen(false)}>
        <PickerView>aa</PickerView>
      </Popup>
    </View>
  );
};

export default Picker;
