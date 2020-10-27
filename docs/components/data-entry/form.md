---
title: Form
order: 1
---

## Form

<code src="./form/index.tsx" />

## API

#### Form

| 属性           | 说明                               | 类型                          | 默认值 |
| -------------- | ---------------------------------- | ----------------------------- | ------ |
| initialValues | 表单的初始值 | object | - |
| onFinish       | 提交表单并且数据验证成功的回调函数 | (values) => void              | -      |
| onFinishFailed | 提交表单但数据验证未通过的回调函数 | (values, errorFields) => void | -      |
| onReset        | 表单重置时会触发 reset 事件        | () => void                    | -      |

#### Form.Item

1. Form.Item 暂时只支持对直接子元素进行表单绑定，即 Form.Item 下只能放置一个元素。

2. 一旦表单元素被 `Form.Item` 包裹并且设置了 `name`，`Form` 会为表单元素自动添加 `value` 和 `onChange`，
你不应该再使用表单元素自身的 `value` 和 `onChange` 来做数据同步。

3. 如果要为表单元素设置初始值，请使用 `initialValues`。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 字段的名称，唯一标识，只有设置了此属性，该字段的数据同步才会被 Form 接管 | string | - |
| rules | 字段的校验规则 | any[] | - |
| style | 自定义 Form.Item 样式 | CSSProperties | - |
