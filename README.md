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

npm install anna-remax-ui

注意：需要 remax 和 remax-cli 的版本在1.19.0以上，低于1.19.0请 npm update remax remax-cli

## 使用

Import component（注意由于remax 1.x版本的rollup chunk机制导致代码重复打包的问题，这里我们需要单独导入组件）

```js
import Button from 'anna-remax-ui/esm/button'
import Cell from 'anna-remax-ui/esm/cell'
```

Import style

```js
// app.js
import 'anna-remax-ui/esm/style/anna.scss'
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


