const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  mode: process.env.NODE_ENV,
  
  devServer: {
    hot: true,
    publicPath: '/build/',
    proxy: {
      '/' : 'http://localhost:3000/'
    }
  },


  
  module: {
    rules : [
      {
        test: /.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /.(css|scss)$/,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },  
  resolve: {
    extensions: ['.js', '.jsx']
  }
}