---
title: Tag
order: 15
---

## Tag

Demo:

<code src="./tag/index.tsx" />

## API

## Tag

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| type | 标签类型，可选值有`info` `success` `error` | string | - |
| size | 标签大小，可选值有`small` `large` | string | - |
| className | 标签类名 | string | - |
| style | 自定义标签样式 | CSSProperties | - |
| onTap | 点击标签时触发的回调 | () => void | - |


#### Tag.CheckableTag

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| checked | 设置标签的选中状态 | boolean | `false` |
| className | CheckableTag的类名 | string | - |
| onChange | 点击标签时触发的回调 | (e: any) => void | - |
