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
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  mode: 'production',
  optimization: {
    minimizer: [],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'common',
          priority: 10,
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          minChunks: 4 // 引用1次就要打包出来
        }
      }
    }
  },
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
