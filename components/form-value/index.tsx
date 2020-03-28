import * as React from 'react';
import { View } from 'remax/one';
import { getPrefixCls } from '../common';
import './index.scss';


const prefixCls = getPrefixCls('form-value');

export interface ValueProps {
  placeholder?: string;
  children?: React.ReactNode;
}

 const Value = (props: ValueProps) => {
  const {
    placeholder,
    children
  } = props;

  return (
    <View
      className={prefixCls}
    >
      {
        (children || children === 0)
          ? children
          : <View className={`${prefixCls}-placeholder`}>
              { placeholder }
            </View>
      }
    </View>
  );
};

export default Value;
