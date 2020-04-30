import * as React from 'react';
import { Checkbox as AlipayCheckbox } from 'remax/ali';
import { Checkbox as WechatCheckbox } from 'remax/wechat';

// 自定义 Props
type Props = any;

export default function Checkbox(props: Props) {
  switch (process.env.REMAX_PLATFORM) {
    case 'ali':
      return <AlipayCheckbox {...props} />;
    case 'wechat':
      return <WechatCheckbox {...props} />;
    default:
      return <WechatCheckbox {...props} />;
  }
}
