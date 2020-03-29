import * as React from 'react';
import { Checkbox as AlipayCheckbox } from 'remax/alipay';
import { Checkbox as WechatCheckbox } from 'remax/wechat';
import { Platform } from 'remax';

// 自定义 Props
type Props = any;

export default function Checkbox(props: Props) {
  switch (Platform.current) {
    case 'alipay':
      return <AlipayCheckbox {...props} />;
    case 'wechat':
    default:
      return <WechatCheckbox {...props} />;
  }
}
