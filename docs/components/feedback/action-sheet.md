---
title: ActionSheet
order: 3
---

## ActionSheet

<code src="./action-sheet/index.tsx" />

## API

#### ActionSheet

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 是否打开 ActionSheet | boolean | false |
| title | 标题 | string \| ReactNode | - |
| actions | ActionSheet 的按钮项的配置 | ActionSheetActionDefaultProps[] | - |
| cancelText | 取消按钮的文本 | string \| ReactNode | `Cancel` |
| cover | 让 ActionSheet 覆盖底部，不留间隙 | boolean | false |
| maskClosable | 点击背景蒙层是否可以关闭 ActionSheet | boolean | true |
| onChange | 点击 ActionSheet 的按钮项触发的事件 | (a: ActionSheetAction, g?: ActionSheetActionDefaultProps, e?: any) => void | - |
| onCancel | 关闭掉 ActionSheet 触发的事件 | (e?: any) => void | - |

#### ActionSheetActionDefaultProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 此项必须设置（其值在整个选项范围内唯一）,根据此属性值进行筛选 | string \| number | - |
| text | 选项名称 | ReactNode \| ActionSheetActionGridProps[] | - |
| type | 选项类型，可选值有 `destructive` | string | - |
| mode | 选项模式，可选值有 `grid` | string | - |
| disabled | 禁用选项 | boolean | false |

#### ActionSheetActionGridProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | Grid 下子选项的值，此项必须设置（其值在整个选项范围内唯一）,根据此属性值进行筛选 | string \| number | - |
| name | Grid 下子选项的名称 | string \| ReactNode | - |
| icon | Grid 下子选项所展示的 Icon | string | - |
| disabled | 禁用选项 Grid 下的子选项 | boolean | false |
