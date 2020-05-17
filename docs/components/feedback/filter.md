---
title: Filter
order: 5
group:
  title: Feedback
  order: 3
---

## Filter

Demo:

<code src="./filter/index.tsx" />

## API

#### Filter

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| zIndex | 设置层级 | number | - |
| style | 自定义Filter样式 | CSSProperties | - |


#### Filter.Item

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| title | 菜单项标题 | string | - |
| value | 当前选中项对应的 key | string | - |
| options | 选项数组 | OptionProps[] | - |
| activeColor | 选项的选中态颜色 | string | - |
| disabled | 是否禁用菜单 | boolean | - |
| onTap | 点击菜单标题时触发的回调 | (open: boolean) => void | - |
| onChange | 选择选项时触发的回调 | (e: OptionProps) => void | - |


#### OptionProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| key | 此项必须设置（其值在整个选项范围内唯一）,根据此属性值进行筛选 | string | - |
| value | 值 | string | - |
