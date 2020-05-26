<p align="center">
  <img width="140" src="https://smebimage.fuliaoyi.com/FoMXNlKdZt9UqufDkPony8ztWKsU">
</p>

<h1 align="center">Anna Remax UI</h1>

<div align="center">一款基于Remax框架开发的小程序UI组件库</div>

## 特性

- 基于 `Remax` 开发 UI 组件
- 一套组件可以在 `微信小程序`，`支付宝小程序`，`钉钉小程序` 多端适配运行

## 体验

<img src="https://smebimage.fuliaoyi.com/FrWM_L5llswAfkEfefnXKEFJwutl">

## 示例

[Examples for Anna Remax UI](https://github.com/AnnaSearl/examples-anna-remax-ui)

## 安装

```bash
npm install anna-remax-ui
```


```bash
yarn add anna-remax-ui
```

## 使用

> :warning: anna-remax-ui v1.6.0 为破坏性的更新，不再兼容以前的版本。

```jsx
import { Button } from 'anna-remax-ui'

const App = () => (
  <>
    <Button>Click Anna</Button>
  </>
);
```

在 `app.js` 中引入样式：

```jsx
import 'anna-remax-ui/dist/anna.css'
```

## 按需加载

`anna-remax-ui` 的 JS 部分默认支持 tree shaking。

CSS 部分需要在 `app.js` 中手动引入

```jsx
import 'anna-remax-ui/esm/button/style/css'

// 如果你使用 sass，也可以这样引入
import 'anna-remax-ui/esm/button/style'
```

配置 sass
```js
// package.json
添加依赖 @remax/plugin-sass
npm install @remax/plugin-sass -D

// remax.config.js
配置@remax/plugin-sass
const sass = require('@remax/plugin-sass');
module.exports = {
  ..., //其他配置项
  plugins: [sass()],
}
```

## 关于 Anna Remax UI

代码由个人维护，谨慎入坑哦～

我会不断完善目前的组件并加入新的组件，大家如果有什么问题或者建议可以踊跃提出哦

如果有做的不好的地方请大家谅解，也请大家多多指教，在设计上和技术上提出更好的方案

最后请路过的大佬们留下点建议吧哈哈哈

给大佬们递🍵...


