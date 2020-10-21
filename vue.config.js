
const path = require('path')
const webpack = require('webpack')
module.exports = {
  // mode: 'development',
  // entry: './src/main.js',
  // output:{
  //   path: path.resolve(__dirname,'dist'),
  //   filename: '[name].js'
  // },
  publicPath: "",
  productionSourceMap: false,
  // module:{
  //   unknownContextCritical: false,
  // }
  devServer:{
    proxy:{
      '/apis': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      }
    }
  },
  configureWebpack:{
    resolve: {
      alias:{
        comps: path.join(__dirname, 'src/components')
      }
    },
    name: 'MYVUE'
  },
  chainWebpack: conf =>{
    // 禁用默认的svg rules
    // 启用svg-sprite-loader
  },
  pluginOptions: {
    DllPlugin: new webpack.DllPlugin({
      context: __dirname,
      name: "[name]_dll",
      path: path.resolve(__dirname, "../dist/manifest.json"),
    }),
  },
};