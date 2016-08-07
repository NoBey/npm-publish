var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var okokok = new webpack.optimize.CommonsChunkPlugin('okokok')
var zepto = new webpack.optimize.CommonsChunkPlugin('zepto')
module.exports = {
    //插件项
    plugins: [
      commonsPlugin,
      zepto,
      okokok
    ],
    //页面入口文件配置
    entry: {
        index : './oo1.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};
