import * as React from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from '../common';

const prefixCls = getPrefixCls('picker-view');

export interface PickerViewProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  onOK?: (e: any) => void;
  onCancel?: (e: any) => void;
}

const Picker: React.FC<PickerViewProps> = (props: PickerViewProps) => {
  const { title, children, onOK, onCancel } = props;
  return (
    <View className={`${prefixCls}`}>
      <View className={`${prefixCls}-toolbar`}>
        <View className={`${prefixCls}-cancel`} onTap={onCancel}>
          取消
        </View>
        <View className={`${prefixCls}-tittle`}>{title}</View>
        <View className={`${prefixCls}-confirm`} onTap={onOK}>
          确定
        </View>
      </View>
      <View className={`${prefixCls}-columns`}>
        {children}
        <View className={`${prefixCls}-selected`} />
        <View className={`${prefixCls}-mask`} />
      </View>
    </View>
  );
};

export default Picker;
