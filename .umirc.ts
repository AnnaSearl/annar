import { defineConfig } from 'dumi';
import path from 'path';

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
  exportStatic: {},
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
  alias: {
    'anna-remax-ui': path.resolve(__dirname, 'docs-source'),
  },
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      REMAX_PLATFORM: JSON.stringify("web"),
    }
  },
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    memo.module
    .rule('px2rem')
    .test(/\.tsx$/i)
    .include
      .add(path.resolve(__dirname, 'docs-source'))
      .add(path.resolve(__dirname, 'docs'))
      .end()
    .exclude
      .add(path.resolve(__dirname, 'components/image-upload'))
      .add(path.resolve(__dirname, 'components/data-picker'))
      .add(path.resolve(__dirname, 'components/data-picker'))
      .add(path.resolve(__dirname, 'components/images'))
      .add(path.resolve(__dirname, 'components/swipe-action'))
      .end()
    .use('px2rem')
    .loader('./build/loaders/jsxPx2Rem.js')
    .options({
      remUnit: 100,
      remFixed: 3
    });
  }
});

