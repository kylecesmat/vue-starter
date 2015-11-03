var vue = require('vue-loader');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./app/app.js",
  output : {
    filename   : 'build.js',
    path       : path.resolve(__dirname, 'build'),
    publicPath : '/'
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.html$/, loader: 'html' }
    ]
  },
  devtool: '#source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
