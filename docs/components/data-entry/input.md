---
title: Input
order: 5
---

## Input

Demo:

<code src="./input/index.tsx" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| value | 输入框内容 | string | - |
| type | 输入框类型 | `text` \| `number`| - |
| className | 输入框类名 | string| - |
| placeholder | 占位提示文字 | string | - |
| disabled | 是否禁用 | boolean | `false` |
| inputAlign | 输入框内容对齐方式 | `center` \| `right`| - |
| label | 左侧标签 | `string` \| `ReactNode` | - |
| icon | 左侧图标名称 | string | - |
| required | 是否显示表单必填星号 | boolean | `false` |
| border | 是否显示内边框 | boolean | `true` |
| extra | 输入框右侧插槽 | `ReactNode` | - |
| maxLength | 最大输入长度 | number | - |
| onChange | value 改变时触发 change 事件 | (v) => void | - |
