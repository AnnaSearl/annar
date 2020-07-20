---
title: Popup
order: 20
---

## Popup

Demo:

<code src="./popup/index.tsx" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| open | 是否打开弹出层 | boolean | `false` |
| title | 弹出层标题 | string | - |
| closeable | 是否显示关闭图标 | boolean | `false` |
| position | 弹出位置，可选值为 `center` `top` `bottom` `right` `left` | string | `center` |
| mask | 是否显示遮罩层 | boolean | `true` |
| square | 是否去除圆角 | boolean | `false` |
| curve | 动画曲线，可选值为 `ease` | string | - |
| style | 设置弹出层样式 | CSSProperties | - |
| onClose | 关闭弹出层时触发 | () => void | - |


