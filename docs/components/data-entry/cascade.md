---
title: Cascade
order: 25
---

## Cascade

Demo:

<code src="./cascade/index.tsx" />

## API

#### Cascade

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 指定当前选中的条目 | string[] \| number[] | [] |
| options | 可选项数据源 | OptionProps | [] |
| changeOnSelect | 为 `true` 时点击每一层级的选项都会触发 onChange 函数 | boolean | false |
| name | Cascade 的名称 | string | - |
| height | Cascade 的高度 | string | - |
| className | Cascade 的类名 | string | - |
| prompt | 自定义已选择的选项的提示 | (e: any) => string | - |
| onChange | 选择完成后的回调 | (value, selectedOptions, isLast) => void | - |

#### OptionProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 此项必须设置（其值在整个选项范围内唯一），根据此属性值进行筛选 | string \| number | - |
| text | 值 | ReactNode | - |
| children | 子节点 | OptionProps[] | - |
