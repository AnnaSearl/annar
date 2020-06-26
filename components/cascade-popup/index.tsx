import * as React from 'react';
import { useState } from 'react';
import { View } from 'remax/one';
import Cascade from '../cascade';
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
  onChange: (e: any, v: any) => void;
  onComplete?: (e: any, values?: any[]) => void;
}

const CascadePopup = (props: CascadePopupProps) => {
  const { value, text, disabled, placeholder, options, onComplete } = props;

  const [show, setShow] = useState(false);

  const handleComplete = (value: any, values?: any[]) => {
    onComplete?.(value, values);
    setShow(false);
  };

  const handleTap = () => {
    if (disabled) {
      return;
    }
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
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
          <Cascade {...props} onComplete={handleComplete} />
        </View>
      </Popup>
    </View>
  );
};

export default CascadePopup;
