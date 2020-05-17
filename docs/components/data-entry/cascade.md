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
| --- | --- | ---- | --- |
| value | 指定当前选中的条目 | OptionProps | `[]` |
| options | 可选项数据源 | OptionProps | `[]` |
| name | Cascade的名称 | string | - |
| height | Cascade的高度 | string | - |
| className | Cascade的类名 | string | - |
| prompt | 自定义已选择的选项的提示 | (e: any) => string | - |
| onChange | 选择完成后的回调 | (v: any[], last?: any) => void | - |
| onComplete | 选择最后一级节点时调用此函数 | (v: any[], last?: any) | - |


#### OptionProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| key | 此项必须设置（其值在整个选项范围内唯一），根据此属性值进行筛选 | string | - |
| value | 值 | string | - |
| parentKey | 父节点key值 | string | - |
| children | 子节点 | OptionProps[] | - |
