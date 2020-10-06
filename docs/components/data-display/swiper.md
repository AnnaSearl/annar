---
title: Swiper
order: 7
---

## Swiper

Demo:

<code src="./swiper/index.tsx" />

## API

#### Swiper

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplay | 是否自动切换 | boolean | false |
| autoplayInterval | 自动切换的时间间隔 | number | 3000 |
| vertical | 是否为纵向滚动 | boolean | false |
| shape | 设置轮播图形状 | `sharp` \| `square` \| `round` | - |
| size | 设置轮播图大小 | `mini` \| `small` \| `middle` \| `large` \| `superlarge` | - |
| style | 设置轮播图样式 | CSSProperties | - |
| height | 设置轮播图高度 | number \| string | - |
| duration | 设置过渡动画的时长 | number | 300 |
| curve | 设置过渡动画的曲线 | string | `ease` |
| showIndicators | 是否显示指示器 | boolean | false |
| indicatorLook | 设置指示器的风格 | `light` \| `dark` \| `anna` | `light` |
| indicatorColor | 设置指示器的颜色 `[activeColor, color]` | [string, string?] | - |
| indicatorStyle | 设置指示器的样式 `[activeStyle, style]` | [CSSProperties, CSSProperties?] | - |
| indicatorPosition | 设置指示器的位置 | `left` \| `right` \| `bottom` \| `bottom-left` \| `bottom-right` | `bottom` |

#### Swiper.Item

| 属性      | 说明               | 类型             | 默认值 |
| --------- | ------------------ | ---------------- | ------ |
| className | Swiper.Item 的类名 | string           | -      |
| style     | Swiper.Item 的样式 | CSSProperties    | -      |
| onTap     | 点击时触发的回调   | (e: any) => void | -      |
