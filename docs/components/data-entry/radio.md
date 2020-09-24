---
title: Radio
order: 10
---

## Radio

Demo:

<code src="./radio/index.tsx" />

## API

#### Radio

| 属性     | 说明                              | 类型                               | 默认值 |
| -------- | --------------------------------- | ---------------------------------- | ------ |
| checked  | 指定当前是否选中                  | boolean                            | false  |
| value    | 根据 value 进行比较，判断是否选中 | string \| number                   | -      |
| extra    | Radio 下方添加的其他信息          | ReactNode                          | -      |
| style    | 自定义 Radio 样式                 | CSSProperties                      | -      |
| onChange | Radio 变化时的回调函数            | (checked: boolean, e: any) => void | -      |

#### Radio.Group

| 属性      | 说明                        | 类型                          | 默认值 |
| --------- | --------------------------- | ----------------------------- | ------ |
| value     | 用于设置当前选中的值        | string \| number              | -      |
| direction | Group 里的 Radio 的排列方向 | string                        | `row`  |
| style     | 自定义 Group 样式           | CSSProperties                 | -      |
| onChange  | 选项变化时的回调函数        | (v: string \| number) => void | -      |
