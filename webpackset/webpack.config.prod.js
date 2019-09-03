const { resolve } = require('./config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const webpackMerge = require('webpack-merge');
const Uglifyjs = require('uglifyjs-webpack-plugin');

module.exports = webpackMerge(baseConfig, {
  entry: {
    'index': resolve('../src/index.js'), // 主网站入口
  },
  output: {
    publicPath: '/',
    path: resolve('../dist'),
    filename: `[name].js`,
    libraryTarget: 'umd'
  },
  mode: 'production',
  plugins: [
    new Uglifyjs(),
    new CleanWebpackPlugin({
      root: __dirname.replace('webpackset', 'dist')
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('../package-lib.json'),
        to: resolve('../dist/package.json'),
        toType: 'file'
      },
      {
        from: resolve('../README.md'),
        to: resolve(`../dist/README.md`),
        toType: 'file'
      }
    ]),
  ]
});
