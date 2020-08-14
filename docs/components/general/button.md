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
| type | 设置按钮类型 | `primary` \| `default` | - |
| plain | 设置朴素按钮 | boolean | false |
| hairline | 设置细线按钮，要和plain配合使用 | boolean | false |
| color | 设置朴素或细线按钮的颜色 | string | - |
| danger | 设置危险按钮 | boolean | false |
| ghost | 幽灵属性，用于设置按钮背景为透明 | boolean | false |
| Icon | 设置按钮的图标 | string \| ReactNode | - |
| look | Anna为用户提供的预设风格，可选值为 `secondary` `secure` `warning` `light` `medium` `dark` `orange` `anna` | string | - |
| shape | 设置按钮形状，可选值为 `square` `circle` | boolean | false |
| size | 设置按钮大小 | `small` \| `large` \| `superlarge` | - |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |
| float | 设置为悬浮状态，当设置为 string 类型时可选值有 `center` `left` `right` | boolean \| string | - |
| loading | 设置按钮载入状态 | boolean | false |
| loadingText | 设置载入状态文本 | string | - |
| disabled | 设置按钮禁用状态 | boolean | false |
| style | 设置按钮样式 | CSSProperties | - |
| onTap | 点击按钮时的回调 | () => void | - |

