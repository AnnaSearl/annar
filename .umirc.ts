import { defineConfig } from 'dumi';
import path from 'path';

process.env.BABEL_ENV = 'dumi';

export default defineConfig({
  publicPath: '/anna-remax-ui/',
  base: '/anna-remax-ui',
  title: 'Anna Remax UI',
  mode: 'site',
  logo: 'https://smebimage.fuliaoyi.com/FoMXNlKdZt9UqufDkPony8ztWKsU',
  favicon: 'https://smebimage.fuliaoyi.com/FoMXNlKdZt9UqufDkPony8ztWKsU',
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/AnnaSearl/anna-remax-ui' },
  ],
  theme: {
    '@c-primary': '#FF7777',
  },
  exportStatic: {},
  outputPath: 'site',
  sass: {
    implementation: require('node-sass'),
  },
  extraPostCSSPlugins: [
    require('postcss-preset-env')(),
    require('postcss-plugin-px2rem')({
      rootValue: 32,
      exclude: '@umijs/preset-dumi',
    })
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'anna-remax-ui',
        libraryDirectory: '/',
        style: true,
      },
    ],
  ],
  alias: {
    'anna-remax-ui': path.resolve(__dirname, 'components'),
    '../one': path.resolve(__dirname, 'components/web/index.ts'),
  },
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    memo.module
    .rule('px2rem')
    .test(/\.tsx$/i)
    .include
      .add(path.resolve(__dirname, 'components'))
      .add(path.resolve(__dirname, 'docs'))
      .end()
    .use('px2rem')
    .loader('./build/loaders/jsxPx2Rem.js')
    .options({
      remUnit: 100,
      remFixed: 3
    });
  },
  styles: [
    `
    .icon.icon-link { 
      display: none;
    }
    .__dumi-default-navbar{
      background-color: #FFEEEE !important;
      box-shadow: unset !important;
    }
    .__dumi-default-navbar-logo{
      font-size: 20px !important;
      padding-left: 52px !important;
    }
    .__dumi-default-search-input{
      background-color: #FFFFFF !important;
    }
    .__dumi-default-layout-hero { 
      background-color: #FFEEEE !important;
    }
    .__dumi-default-menu[data-mode='site'] .__dumi-default-menu-list > li > a.active{
      background: linear-gradient(to left, rgba(255, 238, 238, 0.5), rgba(248, 250, 255, 0)) !important;
    }
    .markdown *:not(pre) code {
      margin: 0 1px;
      padding: .2em .4em !important;
      font-size: .9em;
      color: rgba(0, 0, 0, 0.85) !important;
      background: #f2f4f5 !important;
      border: 1px solid #f0f0f0;
      border-radius: 3px;
      font-family: sfmono-regular,Consolas,liberation mono,Menlo,Courier,monospace;
    }
    .markdown table td:nth-child(3) {
      color: #FF5555;
      font-size: 13px;
      word-break: break-all;
    }
    .markdown table td:nth-child(3) > code {
      color: #FF5555 !important;
      background-color: #F6F6F6 !important;
      font-size: 13px;
      word-break: break-all;
      margin-bottom: 6px;
    }

    `,
  ],
});

