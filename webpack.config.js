const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:"./src/index.js",
    output:{
        filename : "bundle.[contenthash].js",
        path : path.resolve(__dirname,'dist')
    } , 
    module : {
        rules:[
            {
                test:/\.scss$/,
                use:[
                'style-loader', //3
                'css-loader', //2 
                'sass-loader' //1
            ]
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        template:"./src/template.html"
    })],
}