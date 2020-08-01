---
title: SearchBar
order: 25
group:
  title: Data Entry
  order: 1
---

## SearchBar

Demo:

<code src="./search-bar/index.tsx" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| value | 搜索框内容 | string | - |
| placeholder | 占位提示文字 | string | - |
| focus | 获取焦点 | boolean | `false` |
| actionName | 右侧按钮文案 | string | `取消` |
| keepShowActionButton | 是否一直显示右侧按钮 | boolean | `false` |
| hideActionButton | 舍去右侧按钮 | boolean | `false` |
| size | 搜索框大小 | `small` \| `large` | - |
| shape | 搜索框形状，可选值为 `square` | string | - |
| inputStyle | 自定义搜索框样式 | CSSProperties | - |
| onInput | 键盘输入时触发 input 事件 | (v) => void | - |
| onClear | 点击清除按钮时触发事件 | (v) => void | - |
| onActionClick | 右侧按钮点击触发事件 | () => void | - |
| onFocus | 输入框聚焦时触发 | (e) => void | - |
| onBlur | 输入框值失去焦点时触发 | (e) => void | - |
| onSubmit | 点击完成按钮时触发 | (v) => void | - |

