'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
<<<<<<< HEAD
    proxyTable: {//原地址:http://localhost:3000/api/regist
    	'/api': {//这里是需要匹配的路径，如果匹配上了，则代理到目标服务器上
            target: 'http://localhost:3000', //目标服务器
            changeOrigin: true, //开启代理
            pathRewrite: { '^/api': '/api'}  //对访问路径进行替换操作
       },
			'/flight': {//这里是需要匹配的路径，如果匹配上了，则代理到目标服务器上
            target: 'http://m.elong.com', //目标服务器
            changeOrigin: true, //开启代理
            pathRewrite: { '^/flight': '/flight'}  //对访问路径进行替换操作
       }
    },
   /* proxyTable: {//原地址:http://localhost:3000/api/login
        '/api': {//这里是需要匹配的路径，如果匹配上了，则代理到目标服务器上
            target: 'https://lovalhost:3000', //目标服务器
            changeOrigin: true, //开启代理
            pathRewrite: { '^/api': '/api'}  //对访问路径进行替换操作
        }
		},*/
		/*proxyTable: {//原地址:http://m.elong.com/flight/promotion/lowprice/location
    	'/flight': {//这里是需要匹配的路径，如果匹配上了，则代理到目标服务器上
            target: 'http://m.elong.com', //目标服务器
            changeOrigin: true, //开启代理
            pathRewrite: { '^/flight': '/flight'}  //对访问路径进行替换操作
       }

    },*/

=======
    proxyTable: {
        '/': {
            target: 'http://localhost:8080',
            pathRewrite: {
                'api': '/static'
            }
        }
    },
>>>>>>> dec24f161a4a8899aefc93f6fe9878877247d50b

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
