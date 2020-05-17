---
title: Steps
order: 10
---

## Steps

Demo:

<code src="./steps/index.tsx" />

## API

#### Steps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| current | 指定当前步骤，从 0 开始记数 | number | `0` |
| status | 指定当前步骤的状态。 可选失败 `error` | string | - |
| direction | 指定步骤条方向。可选水平 `horizontal` 和竖直 `vertical` 两种方向 | string | `horizontal` |
| steps | 步骤数据 | StepProps[] | - |


#### StepProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| title | 标题 | `string`\|`ReactNode` | - |
| errorTitle | 失败状态下的标题 | `string`\|`ReactNode` | - |
| extra | 右上角自定义区域 | `string`\|`ReactNode` | - |
| description | 步骤的详情描述 | `string`\|`ReactNode` | - |