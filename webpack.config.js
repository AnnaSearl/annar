const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackBar = require('webpackbar');
const pkg = require('./package.json');


const entry = ['./index'];
const libName = "anna";
const exts = ['.web.ts','.web.tsx','.ts', '.tsx', '.js', '.jsx'];

const config = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'anna',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'lodash-es': {
      root: '_',
      commonjs: 'lodash-es',
      commonjs2: 'lodash-es',
      amd: 'lodash-es',
    },
    'remax': {
      root: 'Remax',
      commonjs: 'remax',
      commonjs2: 'remax',
      amd: 'remax',
    },
  },
  resolve: {
    extensions: exts,
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              envName: "web"
            }
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.webpack.json'
            }
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new WebpackBar({
      name: ' 🎸  Anna',
      color: '#FF7777',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: '../report.html',
    }),
  ],
}

const uncompressedConfig = merge({}, config, {
  mode: 'development',
  entry: {
    [libName]: entry,
  },
  optimization: {
    usedExports: true,
  }
})

const productionConfig = merge({}, config, {
  mode: 'production',
  entry: {
    [`${libName}.min`]: entry,
  },
})

module.exports = [productionConfig, uncompressedConfig];
