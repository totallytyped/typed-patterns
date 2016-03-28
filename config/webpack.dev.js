var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.join(__dirname, '..', 'src');

module.exports = {
  debug: true,
  devtool: 'eval',
  entry: ['webpack-hot-middleware/client', './src/index.tsx'],
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['ts'],
      include: APP_DIR
    }]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '..', 'build'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: [path.resolve('../app')],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts']
  }
};
