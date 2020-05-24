import * as React from 'react';

// 自定义 Props
type Props = any;

export default function Checkbox(props: Props) {
  return <input {...props} type="checkbox" />;
}
