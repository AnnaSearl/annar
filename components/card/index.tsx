import * as React from 'react';
import { View } from 'remax/alipay';
import { getPrefixCls } from '../common';
import './index.scss';


const prefixCls = getPrefixCls('card');

export interface CardProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
}

 const Card = ({ title, extra, children }: CardProps) => {

  return (
    <View className={prefixCls}>
      {
        title || extra
          ? <View className={`${prefixCls}-header`}>
              <View className={`${prefixCls}-header-title`}>
                {title}
              </View>
              <View className={`${prefixCls}-header-extra`}>
                {extra}
              </View>
            </View>
          : <View style={{height: '30rpx'}} />
      }
      <View className={`${prefixCls}-content`}>
        {children}
      </View>
    </View>
  );
};

export default Card;
