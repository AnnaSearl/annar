---
title: DatePicker
order: 7
---

## DatePicker

<code src="./date-picker/index.tsx" />

## API

| 属性     | 说明                         | 类型                     | 默认值   |
| -------- | ---------------------------- | ------------------------ | -------- |
| type     | DatePicker 的类型            | date \| time \| datetime | date     |
| value    | 当前选中时间                 | string                   | 当前时间 |
| disabled | 是否禁用                     | boolean                  | false    |
| onChange | value 改变时触发 change 事件 | (v: string) => void      | -        |
