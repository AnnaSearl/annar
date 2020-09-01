<p align="center">
  <img width="100" src="https://smebimage.fuliaoyi.com/Fger7VZclDUaXDJuqg42MlsUqV-w">
</p>

<h1 align="center">Anna Remax UI</h1>

<div align="center">优雅、简洁的 Remax 组件库</div>

## :tada: Next

查看 `next` 分支，发现 Anna 的最新组件及特性！

## 💫 特性

- 基于 `Remax` 开发 UI 组件
- 支持`微信` `支付宝` `钉钉` 小程序多端适配运行
- 支持 Web 开发
- 支持按需引入
- 支持 TypeScript

## 📦 安装

```bash
npm install anna-remax-ui
```

```bash
yarn add anna-remax-ui
```

## ⚒ 使用

> :warning: `anna-remax-ui` v1.6.0 为破坏性的更新，不再兼容以前的版本。

#### 小程序

```jsx
import { Button } from 'anna-remax-ui';

const App = () => (
  <>
    <Button>Click Anna</Button>
  </>
);
```

在 `app.js` 中引入样式：

```jsx
import 'anna-remax-ui/dist/anna.css';
```

#### Web

使用 Web 组件开发需要依赖 `remax/one`

```bash
npm install remax/one
```

```jsx
import { Button } from 'anna-remax-ui/web';

const App = () => (
  <>
    <Button>Click Anna</Button>
  </>
);
```

引入样式：

```jsx
import 'anna-remax-ui/dist/anna.css';
```

## 🥡 按需加载

`anna-remax-ui` 的 JS 部分默认支持 tree shaking。

#### 小程序

CSS 部分需要在 `app.js` 中手动引入

```jsx
import 'anna-remax-ui/esm/button/style/css';

// 如果你使用 sass，也可以这样引入
import 'anna-remax-ui/esm/button/style';
```

#### Web

通过配置 `babel-plugin-import` 进行 CSS 的按需加载

## 🧑🏻‍💻 本地开发

```bash
$ git clone git@github.com:AnnaSearl/anna-remax-ui.git
$ cd anna-remax-ui
$ npm install
$ npm start
```

## 🤝 参与共建

如果你有任何问题，可以提交 issue 给我们，我们也非常欢迎你加入 `Anna Remax UI` 的建设，向我们提交 PR。

Anna Remax UI 维护 `master` 和 `feature` 两个分支，如果您是修复 bug，请提交到 `master`；如果您要添加新的功能，请提交到 `feature`。

#### Pull Request 规范

1. 我们建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能
2. 在 PR 中请添加合适的描述，并关联相关的 Issue
3. 在 Pull Request 前，请同步主仓库的最新代码

#### 常用命令

1. `npm start` 在本地运行 Anna Remax UI 的网站
2. `npm run lint` 检查代码风格
3. `npm run build` 编译 TypeScript 代码到 esm、web 以及 dist 目录

## 🌰 示例

[Examples for Anna](https://github.com/AnnaSearl/examples-anna-remax-ui)

## 🍭 体验

> :vertical_traffic_light: 体验小程序上的组件版本较低，若想查看 `Anna` 的最新组件及特性，请前往 [官方文档](https://annasearl.github.io/anna-remax-ui/)

<img src="https://smebimage.fuliaoyi.com/FrWM_L5llswAfkEfefnXKEFJwutl">

## 🍻 钉钉交流群

<img width="320" src="https://smebimage.fuliaoyi.com/FnY4Dm9zaIpe06ZrMklsG6Qb6Hnt">
