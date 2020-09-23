import React, { useState } from 'react';
import { View } from 'remax/one';
import Cascade, { valueType, OptionProps } from '../cascade';
import Loading from '../loading';
import Popup from '../popup';
import Icon from '../icon';
import FormValue from '../form-value';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('cascade-popup');

export interface CascadePopupProps {
  name?: string;
  value: any[];
  text?: string;
  disabled?: boolean;
  placeholder?: string;
  options: any[];
  prompt?: (e: any) => string;
  onChange: (v: any, s: any) => void;
  [restProps: string]: any;
}

const CascadePopup = (props: CascadePopupProps) => {
  const { value, text, disabled, placeholder, options, onChange } = props;

  const [show, setShow] = useState(false);

  const handleTap = () => {
    if (disabled) {
      return;
    }
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (v: valueType[], s?: OptionProps[], isLast?: boolean) => {
    onChange(v, s);
    if (isLast) {
      setShow(false);
    }
  };

  if (!options || options.length === 0) {
    return (
      <View className={prefixCls}>
        <View className={`${prefixCls}-loading`}>
          <Loading />
        </View>
      </View>
    );
  }

  return (
    <View className={prefixCls}>
      <View className={`${prefixCls}-formitem`} onTap={handleTap}>
        <FormValue placeholder={placeholder}>{text || value?.map(i => i.name).join(' ')}</FormValue>
      </View>
      <Popup position="bottom" open={show}>
        <View className={`${prefixCls}-container`}>
          <View className={`${prefixCls}-container-header`}>
            <View>请选择</View>
            <View className={`${prefixCls}-container-header-close`} onTap={handleClose}>
              <Icon type="close" color="#999" />
            </View>
          </View>
          <Cascade {...props} onChange={handleChange} />
        </View>
      </Popup>
    </View>
  );
};

export default CascadePopup;
