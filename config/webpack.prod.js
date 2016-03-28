var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.join(__dirname, '..', 'src');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.tsx',
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['ts'],
      include: APP_DIR
    }]
  },
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  resolve: {
    root: [path.resolve('../app')],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts']
  },
  tslint: {
    emitErrors: true,
    failOnHint: true
  }
}
