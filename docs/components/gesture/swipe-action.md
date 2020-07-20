---
title: SwipeAction
order: 5
group:
  order: 15
---

## SwipeAction

Demo:

<code src="./swipe-action/index.tsx" />

## API

#### SwipeActionProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| open | 是否打开 SwipeAction | boolean | `false` |
| options | 配置 SwipeAction 的操作项 | SwipeActionOptionProps[] | `[]` |
| onOpened | 打开时触发的函数 | (e: any) => void | - |
| onClosed | 关闭时触发的函数 | (e: any) => void | - |


#### SwipeActionOptionProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| name | 选项名称 | ReactNode | - |
| style | 选项样式 | CSSProperties | - |
| onTap | 点击选项触发的函数 | (e: any) => void | - |