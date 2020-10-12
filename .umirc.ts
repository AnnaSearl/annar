import { defineConfig } from 'dumi';
import path from 'path';

process.env.BABEL_ENV = 'dumi';

export default defineConfig({
  publicPath: '/annar/',
  base: '/annar',
  title: 'Annar',
  mode: 'site',
  logo: 'https://smebimage.fuliaoyi.com/Fger7VZclDUaXDJuqg42MlsUqV-w',
  favicon: 'https://smebimage.fuliaoyi.com/Fger7VZclDUaXDJuqg42MlsUqV-w',
  navs: [
    null,
    { title: 'Eurus', path: 'https://github.com/AnnaSearl/eurus' },
    { title: 'GitHub', path: 'https://github.com/AnnaSearl/annar' },
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
    // CSS 文件 px2rem
    require('postcss-plugin-px2rem')({
      rootValue: 32,
      exclude: /(.dumi)/,
    }),
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'annar',
        libraryDirectory: '/',
        style: true,
      },
    ],
  ],
  alias: {
    annar: path.resolve(__dirname, 'components'),
    '../one': path.resolve(__dirname, 'components/web/index.ts'),
  },
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    // jsx 内联样式 px2rem
    memo.module
      .rule('px2rem')
      .test(/\.tsx$/i)
      .include.add(path.resolve(__dirname, 'components'))
      .add(path.resolve(__dirname, 'docs'))
      .end()
      .use('px2rem')
      .loader('./build/loaders/jsxPx2Rem.js')
      .options({
        remUnit: 100,
        remFixed: 3,
      });
  },
  styles: [
    `
    .icon.icon-link { 
      display: none;
    }
    .__dumi-default-navbar-logo{
      font-size: 20px !important;
      padding-left: 52px !important;
    }
    .__dumi-default-menu[data-mode='site'] .__dumi-default-menu-list > li > a.active{
      background: rgba(255, 119, 119, 0.1) !important;
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
    .anna-btn:not(.anna-btn-disabled):hover .anna-btn-mask {	
      box-sizing: border-box;	
      position: absolute;	
      top: -1PX;	
      right: -1PX;	
      bottom: -1PX;	
      left: -1PX;	
      content: '';	
      background-color: rgba(255, 255, 255, 0.35);	
      border-radius: inherit;	
      pointer-events: none;	
      transition: background-color 0.3s;
    }

    `,
  ],
});
