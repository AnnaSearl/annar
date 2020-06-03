<p align="center">
  <img width="140" src="https://smebimage.fuliaoyi.com/FoMXNlKdZt9UqufDkPony8ztWKsU">
</p>

<h1 align="center">Anna Remax UI</h1>

<div align="center">一款优雅、简洁的 Remax 组件库</div>


## 特性

- 基于 `Remax` 开发 UI 组件
- 支持`微信` `支付宝` `钉钉` 小程序多端适配运行
- 支持按需引入
- 支持TypeScript


## 安装

```bash
npm install anna-remax-ui
```


```bash
yarn add anna-remax-ui
```

## 使用

> :warning: `anna-remax-ui`  v1.6.0 为破坏性的更新，不再兼容以前的版本。

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

## 参与共建

如果你有任何问题，可以提交issue给我们，我们也非常你欢迎加入 `Anna Remax UI` 的建设，向我们提交PR。


## 示例

[Examples for Anna Remax UI](https://github.com/AnnaSearl/examples-anna-remax-ui)


## 体验

<img src="https://smebimage.fuliaoyi.com/FrWM_L5llswAfkEfefnXKEFJwutl">


## 钉钉交流群

<img width="320" src="https://smebimage.fuliaoyi.com/FkXpYLyrhlx6aeNK0pvgv4FjBaHM">



