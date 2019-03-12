const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My-reads',
      template: './src/index.html',
    }),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
module.exports = config;
