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
| type | tabs类型 | string | - |
| direction | tabs方向 | `horizontal` \| `vertical` | `horizontal` |
| activeKey | 当前激活 Tab 面板的 key | `string` \| `number` | - |
| animated | 是否使用动画切换 Tabs | boolean | `false` |
| extra | 自定义卡片title内容 | `string` \| `ReactNode` | - |
| titleWidth | 自定义卡片标题宽度 | number | - |
| titleSquare | 设置卡片标题为方形 | boolean | `false` |
| titleAlign | 设置tabs类型为plain的标题的对齐方向 | `center` | `false` |
| fixed | 设置Tabs固定在页面顶部 | boolean | `false` |
| headerStyle | 自定义title样式 | CSSProperties | - |
| onTabClick | 自定义卡片内容区域样式 | (i: any) => void | - |


#### Tabs.TabContent

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | ---- | --- |
| key | 对应activeKey | `string` \| `number` | - |
| tab | 选项卡标题所显示内容 | `string` \| `ReactNode` | - |
