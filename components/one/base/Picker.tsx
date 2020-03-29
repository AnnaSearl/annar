import * as React from 'react';
import { Picker as AlipayPicker } from 'remax/alipay';
import { Picker as WechatPicker } from 'remax/wechat';
import { Platform } from 'remax';

// 自定义 Props
type Props = any;

export default function Picker(props: Props) {
  switch (Platform.current) {
    case 'alipay':
      return <AlipayPicker {...props} />;
    case 'wechat':
    default:
      return <WechatPicker {...props} />;
  }
}
