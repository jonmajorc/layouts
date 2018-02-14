const webpack = require('webpack')
const path = require('path');

module.exports = {
  target: 'electron',
  entry: {
    app: ['webpack/hot/dev-server', './src/app.js']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/dist/',
  },

  module: {
    rules: [
      { 
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      },
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
};