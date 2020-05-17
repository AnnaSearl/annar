---
title: Tabs
order: 20
---

## Tabs

Demo:

<code src="./tabs/index.tsx" />

## API

#### Tabs

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| type | 卡片标题 | string | - |
| tabs | tab 数据 | TabTitleProps[] | - |
| activeTab | 当前激活的 Tab 索引 | string | - |
| extra | 自定义卡片title内容 | `string` \| `ReactNode` | - |
| titleWidth | 自定义卡片标题宽度 | number | - |
| titleSquare | 设置卡片标题为方形 | boolean | `false` |
| fixed | 设置Tabs固定在页面顶部 | boolean | `false` |
| headerStyle | 自定义title样式 | CSSProperties | - |
| onTabClick | 自定义卡片内容区域样式 | (i: any) => void | - |


#### Tabs.TabContent

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| tabId | tab 内容序列索引 | string | - |
| activeTab | 选项卡当前激活序列索引 | string | - |


#### TabTitleProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| key | 此项必须设置（其值在整个选项范围内唯一），对应tabId | string | - |
| title | 选项卡标题 | string | - |
