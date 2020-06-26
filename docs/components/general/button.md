---
title: Button
order: 5
group:
  order: 0
---

## Button

Demo:

<code src="./button/index.tsx" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| type | 设置按钮类型 | `primary` \| `simple` | - |
| plain | 设置朴素按钮 | boolean | `false` |
| hairline | 设置细线按钮，要和plain配合使用 | boolean | `false` |
| color | 设置朴素或细线按钮的颜色 | string | - |
| danger | 设置危险按钮 | boolean | `false` |
| square | 设置方形按钮 | boolean | `false` |
| size | 设置按钮大小 | `small` \| `large` \| `superlarge` | - |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | `false` |
| loading | 设置按钮载入状态 | boolean | `false` |
| loadingText | 设置入状态文本 | string | - |
| disabled | 设置按钮禁用状态 | boolean | `false` |
| style | 设置按钮样式 | CSSProperties | - |
| onTap | 点击按钮时的回调 | () => void | - |

