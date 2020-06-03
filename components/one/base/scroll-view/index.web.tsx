import * as React from 'react';
// 自定义 Props
type Props = any;

export default function ScrollView(props: Props) {
  return <div {...props} style={{ ...props.style, overflow: 'scroll' }} />;
}
