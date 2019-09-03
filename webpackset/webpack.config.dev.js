const { resolve } = require('./config');

// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const webpackMerge = require('webpack-merge');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = webpackMerge(baseConfig, {
  entry: {
    index: resolve('../src/index.js') // 主网站入口
  },
  output: {
    publicPath: '/',
    path: resolve('../dist'),
    filename: `[name].js`
  },
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: resolve('../src/index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    host: '127.0.0.1',
    port: 8082,
    inline: true,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true, // using html5 router.
    contentBase: resolve('../dist')
  }
});
