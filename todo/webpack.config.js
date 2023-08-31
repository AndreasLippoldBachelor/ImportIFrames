// webpack.config.js (Microfrontend "todo")
const path = require('path');

module.exports = {
  output: {
    publicPath: 'http://localhost:3001/', // port
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
