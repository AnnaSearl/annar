import * as React from 'react';
import { ScrollView as AlipayScrollView } from 'remax/ali';
import { ScrollView as WechatScrollView } from 'remax/wechat';

// 自定义 Props
type Props = any;

export default function ScrollView(props: Props) {
  switch (process.env.REMAX_PLATFORM) {
    case 'ali':
      return <AlipayScrollView {...props} />;
    case 'wechat':
      return <WechatScrollView {...props} />;
    default:
      return <WechatScrollView {...props} />;
  }
}
