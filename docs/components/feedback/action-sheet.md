---
title: ActionSheet
order: 3
---

## ActionSheet

Demo:

<code src="./action-sheet/index.tsx" />

## API

#### ActionSheet

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| open | 是否打开ActionSheet | boolean | `false` |
| title | 标题 |  `string` \| `ReactNode` | - |
| actions | ActionSheet的按钮项的配置 | ActionSheetActionDefaultProps[] | - |
| cancelText | 取消按钮的文本 | `string` \| `ReactNode` | `Cancel` |
| cover | 让ActionSheet覆盖底部，不留间隙 | boolean | `false` |
| maskClosable | 点击背景蒙层是否可以关闭ActionSheet | boolean | `true` |
| onChange | 点击ActionSheet的按钮项触发的事件 | (a: ActionSheetAction, g?: ActionSheetActionDefaultProps, e?: any) => void | - |
| onCancel | 关闭掉ActionSheet触发的事件 | (e?: any) => void | - |

#### ActionSheetActionDefaultProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| value | 此项必须设置（其值在整个选项范围内唯一）,根据此属性值进行筛选 | `string` \| `number` | - |
| text | 选项名称 |  `ReactNode` \| `ActionSheetActionGridProps[]` | - |
| type | 选项类型，可选值有 `destructive` | string | - |
| mode | 选项模式，可选值有 `grid` |  string | - |
| disabled | 禁用选项 |  boolean | `false` |

#### ActionSheetActionGridProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| value | Grid下子选项的值，此项必须设置（其值在整个选项范围内唯一）,根据此属性值进行筛选 | `string` \| `number` | - |
| name | Grid下子选项的名称 |  `string` \| `ReactNode` | - |
| icon | Grid下子选项所展示的Icon | string | - |
| disabled | 禁用选项Grid下的子选项 |  boolean | `false` |