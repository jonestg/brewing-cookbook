var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/app.js',
  resolve: {
    root: [
      __dirname,
      path.resolve(__dirname, 'app'),
      path.resolve(__dirname,'node_modules')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolveLoader: {
    root: path.join(__dirname,'node_modules')
  },
  devtool: 'sourcemaps',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body',
      hash: 'true'
    })
  ]
};
