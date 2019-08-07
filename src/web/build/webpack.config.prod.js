const path = require('path')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const webpack = require('webpack');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    // open: true,
    // host: '0.0.0.0',
    // stats: 'errors-only',
    // port: 8080,
    // proxy: {
    //   '/api': 'http://ask.org/test'
    // }
  },
  plugins:[
    new webpack.DefinePlugin({
      BASE_URL:"'http://ask.org'"
    })
  ]
});