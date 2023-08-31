// webpack.config.js (Microfrontend "todolist")
const path = require('path');

module.exports = {
  output: {
    publicPath: 'http://localhost:3002/', 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
