---
title: Grid
order: 5
group:
  order: 0
---

## Grid

Demo:

<code src="./grid/index.tsx" />

## Row

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| gutter | 栅格间隔 | number | `0` |
| justify | 水平排列方式 | string | `start` |
| align | 垂直对齐方式 | string | `top` |

## Col

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| span | 栅格占位格数 | number | - |
| offset | 栅格左侧的间隔格数 | number | 0 |

## Grid

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| data | Grid的数据，数组每个元素代表Grid子项目的数据 | any[] | `[]` |
| columns | 列数 | string | `4` |
| render | 渲染Grid子项目的函数, 需要返回子项目元素，不传入此函数时子项目默认显示children | (o: any) => any | - |