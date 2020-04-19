import * as React from 'react';
import { Picker as AlipayPicker } from 'remax/ali';
import { Picker as WechatPicker } from 'remax/wechat';

console.log('process.env.REMAX_PLATFORM', process.env.REMAX_PLATFORM);

// 自定义 Props
type Props = any;

export default function Picker(props: Props) {
  switch (process.env.REMAX_PLATFORM) {
    case 'alipay':
      return <AlipayPicker {...props} />;
    case 'wechat':
      return <WechatPicker {...props} />;
    default:
      return <WechatPicker {...props} />;
  }
}
