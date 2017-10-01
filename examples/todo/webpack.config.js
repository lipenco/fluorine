var webpack = require('webpack')
var path = require('path')

module.exports = {
  // watch: true,
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'fluorine-lib': path.join(__dirname, '../..')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js'
  }
}
