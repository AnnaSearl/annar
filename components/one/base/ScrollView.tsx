import * as React from 'react';
import { ScrollView as AlipayScrollView } from 'remax/alipay';
import { ScrollView as WechatScrollView } from 'remax/wechat';
import { Platform } from 'remax';

// 自定义 Props
type Props = any;

export default function ScrollView(props: Props) {
  switch (Platform.current) {
    case 'alipay':
      return <AlipayScrollView {...props} />;
    case 'wechat':
    default:
      return <WechatScrollView {...props} />;
  }
}
