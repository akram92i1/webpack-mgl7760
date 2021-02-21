const path = require('path')
module.exports = {
    mode:'development',
    entry:"./src/index.js",
    output:{
        filename : "bundle.js",
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
    }
}