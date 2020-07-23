---
title: Tag
order: 15
---

## Tag

Demo:

<code src="./tag/index.tsx" />

## API

#### Tag

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| plain | 设置朴素标签 | boolean | `false` |
| size | 标签大小，可选值有`small` `large` | string | - |
| color | 标签颜色，可选值有`blue` `green` `yellow` `red` | string | - |
| className | 标签类名 | string | - |
| style | 自定义标签样式 | CSSProperties | - |
| onTap | 点击标签时触发的回调 | () => void | - |


#### Tag.CheckableTag

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| checked | 设置标签的选中状态 | boolean | `false` |
| checkedColor | 设置标签选中状态的颜色，可选值有`blue` `green` `yellow` `red` | string | - |
| className | CheckableTag的类名 | string | - |
| onChange | 点击标签时触发的回调 | (e: any) => void | - |
