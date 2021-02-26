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
| initialValues  | 表单的初始值                       | object                        | -      |
| onFinish       | 提交表单并且数据验证成功的回调函数 | (values) => void              | -      |
| onFinishFailed | 提交表单但数据验证未通过的回调函数 | (values, errorFields) => void | -      |
| onReset        | 表单重置时会触发 reset 事件        | () => void                    | -      |

#### Form.Item

1. Form.Item 暂时只支持对直接子元素进行表单绑定，即 Form.Item 下只能放置一个元素。

2. 一旦表单元素被 `Form.Item` 包裹并且设置了 `name`，`Form` 会为表单元素自动添加 `value` 和 `onChange`，你不应该再使用表单元素自身的 `value` 和 `onChange` 来做数据同步（但是你可以继续监听 `onChange` 事件）。

3. 如果要为表单元素设置初始值，请使用 `initialValues`。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 字段的名称，唯一标识，只有设置了此属性，该字段的数据同步才会被 Form 接管 | string | - |
| rules | 字段的校验规则 | any[] | - |
| valuePropName | 自定义被 Form.Item 包裹的组件的值的属性 | string | `value` |
| trigger | 自定义被 Form.Item 包裹的组件的监听变更的属性 | string | `onChange` |
| style | 自定义 Form.Item 样式 | CSSProperties | - |
| noStyle | 取消 Form.Item 默认的样式 | boolean | - |
| label | 左侧标签 | string \| ReactNode | - |
| icon | 左侧图标名称 | string | - |
| required | 是否显示表单必填星号 | boolean | false |
| border | 是否显示内边框 | boolean | true |
| valueAlign | 设置右侧值水平对齐方式 | `left` \| `center` \| `right` | `right` |

#### FormInstance

使用 `useForm` 来获取 FormInstance，通过 FormInstance 对表单进行操作。

| 属性           | 说明                   | 类型                  | 默认值 |
| -------------- | ---------------------- | --------------------- | ------ |
| getFieldError  | 获取对应字段的错误信息 | (name: string) => any | -      |
| getFieldsError | 获取所有字段的错误信息 | () => any             | -      |
| getFieldValue  | 获取对应字段的值       | (name: string) => any | -      |
| getFieldsValue | 获取所有字段的值       | () => any             | -      |
| setFieldsValue | 设置表单的值           | (values) => void      | -      |
| resetFields    | 重置表单的值           | (values) => void      | -      |
| validateFields | 验证表单               | () => void            | -      |
| submit         | 提交表单               | () => void            | -      |
