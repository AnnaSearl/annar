<p align="center">
  <img width="140" src="https://smebimage.fuliaoyi.com/FrTrosbTBf-L19XoTtGrz-BcPQeJ">
</p>

<h1 align="center">Anna Remax UI</h1>

<div align="center">一款基于Remax框架开发的小程序UI组件库</div>

## 特性

- 基于 `Remax` 开发 UI 组件
- 一套组件可以在 `微信小程序`，`支付宝小程序`，`钉钉小程序` 多端适配运行

## 体验

<img src="https://smebimage.fuliaoyi.com/FlgWFhyopxQeTWA6_G205YVP1yhb">

## 示例

[Examples for Anna Remax UI](https://github.com/AnnaSearl/examples-anna-remax-ui)

## 安装

npm install anna-remax-ui

注意：需要 remax 和 remax-cli 的版本在1.19.0以上，低于1.19.0请 npm update remax remax-cli

## 使用

由于remax 1.x版本的rollup chunk机制导致代码重复打包的问题（该问题在remax2.0已解决），所以需要在scr目录下的app.scss文件下导入样式

```js
@import '../node_modules/anna-remax-ui/esm/style/anna.scss';
```

在代码中 `import` 需要的组件（注意同样由于rollup chunk机制，这里我们需要单独导入组件）

```js
import Button from 'anna-remax-ui/esm/button'
```

## 关于 Anna Remax UI

代码由个人维护，谨慎入坑哦～

组件库刚开始还不是很完善，接下来我会密集的更新，完善目前的组件并加入新的组件，大家如果有什么问题或者建议可以踊跃提出哦

如果有做的不好的地方请大家谅解，也请大家多多指教，提出更好的方案！


