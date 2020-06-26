---
title: Skeleton
order: 25
---

## Skeleton

Demo:

<code src="./skeleton/index.tsx" />

## API

#### Skeleton

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| title | 标题 | `boolean` | `false` |
| titleColor | 标题背景色 | `string` | - |
| avatar | 头像 | `boolean` | `false` |
| image | 图片 | `boolean` | `false` |
| paragraph | 段落 | SkeletonParagraphProps | - |
| loading | 为 `true` 时，显示占位图。反之则直接展示子组件 | `boolean` | `true` |
| fade | 配置骨架屏的淡入淡出效果 | `boolean` | `false` |


#### SkeletonParagraphProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| rows | 设置段落占位图的行数 | number | 3 |
| width | 设置段落占位图的宽度，若为数组时则为对应的每行宽度 | `number` \| `string` \| `number[]` \| `string[]` | `[80, 'auto', 200]` |

