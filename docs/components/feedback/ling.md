---
title: Ling
order: 7
---

## Ling

Demo:

<code src="./ling/index.tsx" />

## API

#### Methods

`show(config, [duration], onClose)`

`info(config, [duration], onClose)`

`success(config, [duration], onClose)`

`warning(config, [duration], onClose)`

`error(config, [duration], onClose)`

#### Ling

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| config | 显示内容的配置项，当为 string 或 ReactNode 时表示 `title` | string \| ReactNode \| LingConfigProps | - |
| duration | 自动关闭的延时 | number | 2000 |
| onClose | 关闭时触发的回调函数 | () => void | - |

#### LingConfigProps

| 属性      | 说明       | 类型                | 默认值 |
| --------- | ---------- | ------------------- | ------ |
| title     | 标题       | string \| ReactNode | -      |
| content   | 内容       | string \| ReactNode | -      |
| icon      | 图标       | string \| ReactNode | -      |
| iconColor | 图标的颜色 | string              | #000   |
