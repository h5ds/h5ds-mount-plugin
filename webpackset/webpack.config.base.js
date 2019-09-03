const { resolve } = require('./config');

// webpack 配置文档
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.esm', '.css', '.less'],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|esm)$/,
        include: [resolve('../src')],
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader?minimize=false'
      }
    ]
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      template: resolve('../src/index.html'),
      filename: 'index.html'
    })
  ]
};
