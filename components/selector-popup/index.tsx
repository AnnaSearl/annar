import * as React from 'react';
import { useState } from 'react';
import { View } from 'remax/one';
import Popup from '../popup';
import Selector from '../selector';
import FormValue from '../form-value';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('selector-popup');

export interface SelectorPopupProps {
  placeholder?: string;
  children?: React.ReactNode;
  title?: React.ReactNode;
  onChange?: (value: any, valueStr?: string) => void;
  [restProps: string]: any;
}

const SelectorPopup = (props: SelectorPopupProps) => {
  const { placeholder, children, title, onChange } = props;

  const [show, setShow] = useState(false);

  const handleTap = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (value: any, valueStr?: string) => {
    onChange?.(value, valueStr);
    handleClose();
  };

  return (
    <View className={prefixCls}>
      <View className={`${prefixCls}-formitem`} onTap={handleTap}>
        <FormValue placeholder={placeholder}>{children}</FormValue>
      </View>
      <Popup position="bottom" title={title} closeable open={show} onClose={handleClose}>
        <View className={`${prefixCls}-container`}>
          <Selector
            {...props}
            style={{
              height: '540px',
            }}
            onChange={handleChange}
          />
        </View>
      </Popup>
    </View>
  );
};

export default SelectorPopup;
