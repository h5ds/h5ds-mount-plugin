const { resolve } = require('./config');
const nodeExternals = require('webpack-node-externals');
// webpack 配置文档
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.esm', '.css', '.less'],
    alias: {}
  },
  externals: [nodeExternals()],
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
  plugins: [new CaseSensitivePathsPlugin()]
};
