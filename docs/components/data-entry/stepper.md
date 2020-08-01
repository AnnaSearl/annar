---
title: Stepper
order: 35
---

## Stepper

Demo:

<code src="./stepper/index.tsx" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| value | 当前值 | number | `min` |
| step | 步长，每次改变的步数 | number | `1` |
| min | 最小值 | number | - |
| disabled | 是否禁用 | boolean | `false` |
| plain | 设置朴素步进器 | boolean | `false` |
| size | 设置步进器大小，可选值为 `small` | string | - |
| shape | 设置步进器形状，可选值为 `circle` | string | - |
| color | 设置步进器按钮颜色 | string | - |
| bgColor | 设置步进器按钮背景颜色 | string | - |
| onChange | 当值变化时的回调 | (v: number, e?: any) => void | - |
| onInput | 当输入框的值变化时的回调 | (v: number, e?: any) => void | - |
| onTap | 当点击按钮时值变化的回调 | (v: number, e?: any) => void | - |
| onFocus | 输入框聚焦时的回调 | (e: any) => void | - |
| onBlur | 输入框失焦时的回调 | (e: any) => void | - |

