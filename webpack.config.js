var path = require('path')
var webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: NODE_ENV == 'development' ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env' : {
        NODE_ENV : JSON.stringify(NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.json$/, exclude: /node_modules/, loader: "json-loader"},
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}
