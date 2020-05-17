---
title: Picker
order: 6
---

## Picker

Demo:

<code src="./picker/index.tsx" />

## API

#### Picker

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| value | 表示选择了 options 中对应key值的选项 | string | - |
| options | Picker的所有选项 | OptionProps | - |
| placeholder | 占位提示文字 | string | - |
| disabled | 是否禁用 | boolean | `false` |
| pickerAlign | Picker对齐方式 | `center` \| `right`| - |
| label | 左侧标签 | `string` \| `ReactNode` | - |
| icon | 左侧图标名称 | string | - |
| required | 是否显示表单必填星号 | boolean | `false` |
| border | 是否显示内边框 | boolean | `true` |
| onChange | value 改变时触发 change 事件 | (v: {key: string, value: string}) => void | - |


#### OptionProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| key | 此项必须设置（其值在整个选项范围内唯一）| string | - |
| value | 值 | string | - |
