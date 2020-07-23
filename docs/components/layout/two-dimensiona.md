---
title: Two-dimensional
order: 10
---

## Two-dimensional

Demo:

<code src="./two-dimensional/index.tsx" />

## API

#### Grid

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| data | Grid的数据，数组每个元素代表Grid子项目的数据 | any[] | `[]` |
| columns | 列数 | number | `4` |
| gutter | Grid间隔。为 `number` 时表示水平间距，为 `[number, number]` 时表示 [水平间距, 垂直间距]  | `number` \| `[number, number?]` | - |
| span | Grid子项目的占位格数。为 `number` 时表示第一个子项目的占位格数，若为负数则表示最后一个子项目的占位格数；为 `number[]` 时表示多个子项目的占位格数，若数组长度小于Grid子项目的个数，余下的占位格数将由 `columns` 决定 | `number` \| `number[]` | - |
| children | 渲染Grid子项目的函数, 需要返回子项目元素 | (o: any, index?: number, colIndex?: number, rowIndex?: number) => any | - |