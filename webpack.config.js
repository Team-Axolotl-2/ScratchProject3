const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
require("babel-core/register");
require("babel-polyfill");

module.exports = {
  entry: ['babel-polyfill','./client/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    hot: true,
    //publicPath: '/build/',
    proxy: {
      '/api' : 'http://localhost:3000/',
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./client/public/index.html",
    }),
  ],
  module: {
    rules : [
      {
        test: /.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
