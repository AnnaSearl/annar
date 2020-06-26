---
title: Cell
order: 10
---

## Cell

<code src="./cell/index.tsx" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| label | 左侧标签 | `string` \| `ReactNode` | - |
| icon | 左侧图标名称 | string | - |
| required | 是否显示表单必填星号 | boolean | `false` |
| arrow | 右侧箭头 | boolean | `false` |
| description | 下方描述信息 | `string` \| `ReactNode` | - |
| border | 是否显示内边框 | boolean | `true` |
| verticality | 是否为竖直方向 | boolean | `false` |
| style | 设置单元格样式 | CSSProperties | - |
| labelStyle | 设置左侧标签样式 | CSSProperties | - |
| valueStyle | 设置右侧值样式 | CSSProperties | - |
| onTap | 点击单元格时的回调 | () => void | - |

