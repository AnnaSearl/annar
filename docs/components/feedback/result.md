---
title: Result
order: 20
---

## Result

Demo:

<code src="./result/index.tsx" />

## API

#### Result

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| title | 标题 | `string` \| `ReactNode` | - |
| subTitle | 副标题 | `string` \| `ReactNode` | - |
| extra | 操作区 | ReactNode | `false` |
| status | 状态值，决定图标和颜色，可选值有 `info` `success` `warning` `error` | string | `info` |
| icon | 自定义 icon | ReactNode | IconProps | - |
| height | 结果页的高度 | string | `100vh` |


#### IconProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| name | icon 的名称 | string | - |
| color | icon 的颜色 | string | - |

