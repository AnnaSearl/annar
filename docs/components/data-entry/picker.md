---
title: Picker
order: 6
---

## Picker

<code src="./picker/index.tsx" />

## API

#### Picker

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| range | 选项内容，单列选择为 `string[]` 或 `Object[]`，多列选择为 `Array[]` | string[] \| Object[] \| Array[] | - |
| rangeKey | 选项对象中，选项文字对应的键名 | string | text |
| value | 表示选择了 range 中的第几个（下标从 0 开始） | number \| number[] | 0 |
| disabled | 是否禁用 | boolean | `false` |
| onChange | value 改变时触发 change 事件 | (v: number \| number[]) => void | - |

#### PickerView

| 属性     | 说明                           | 类型             | 默认值 |
| -------- | ------------------------------ | ---------------- | ------ |
| title    | 标题                           | ReactNode        | -      |
| children | 只可放置 PickerViewColumn 组件 | ReactNode        | -      |
| onOK     | value 改变时触发 change 事件   | (e: any) => void | -      |
| onChange | value 改变时触发 change 事件   | (e: any) => void | -      |

#### PickerViewColumn

| 属性       | 说明                                           | 类型                 | 默认值 |
| ---------- | ---------------------------------------------- | -------------------- | ------ |
| options    | 选项列表                                       | string[] \| Object[] | []     |
| optionsKey | 选项对象中，选项文字对应的键名                 | string               | text   |
| value      | 表示选择了 options 中的第几个（下标从 0 开始） | number               | 0      |
| onChange   | value 改变时触发 change 事件                   | (v: number) => void  | -      |
