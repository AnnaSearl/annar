---
title: Input
order: 5
---

## Input

<code src="./input/index.tsx" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框内容 | string | - |
| name | 组件名称，用于表单提交获取数据 | string | - |
| type | 输入框类型 | `text` \| `number` \| `idcard` \| `digit` \| `password` | `text` |
| size | 输入框大小 | `large` \| `middle` \| `small` | - |
| prefix | 输入框前缀 | ReactNode | - |
| suffix | 输入框后缀 | ReactNode | - |
| align | 输入框内容对齐方式 | `center` \| `right` | - |
| maxLength | 最大输入长度 | number | - |
| placeholder | 占位提示文字 | string | - |
| disabled | 是否禁用 | boolean | false |
| className | 输入框包裹层的类名 | string | - |
| style | 输入框包裹层的样式 | CSSProperties | - |
| inputStyle | input 的样式 | CSSProperties | - |
| onChange | value 改变时触发 change 事件 | (v) => void | - |
| onFocus | 聚焦时触发 | (v) => void | - |
| onBlur | 失去焦点时触发 | (v) => void | - |
