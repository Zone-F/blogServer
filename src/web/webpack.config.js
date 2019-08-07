const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  target:"web",
  entry:path.join(__dirname,'src/main.js'),
  output:{
    filename: 'assets/js/[name].[chunkhash].js',
    path:path.join(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader'
        
      },
      {
        test: /\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options:{
              sourceMap: true,
            }
          },
          'stylus-loader',
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use:[
          {
            loader: 'url-loader',
            options:{
              //编译小于1024的文件为base64
              limit: 1024,
              name:'[name].[ext]'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      // filename: 'index.html', // 配置输出文件名和路径
      template: 'src/index.html', // 配置文件模板
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[hash].css",
      chunkFilename: "assets/css/[name].[hash].css"
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',   // 配置别名'vue$'，不然import 'vue'时，webpack找不到
      '@': path.resolve(__dirname, './src'),
      'utils': path.resolve(__dirname, 'src/utils/utils.js')
    },
    extensions: ['*', '.js', '.json', '.vue'], // 在import这些拓展名的文件时，可以省略拓展名
  }
}

module.exports = config