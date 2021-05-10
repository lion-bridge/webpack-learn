const path = require('path')

module.exports = {
    entry: './src/index.js',
    output:{
        filename: '[name].chrunk.js',
        path: path.resolve(__dirname, './src/dist')
    },
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],// 链式调用，顺序不能颠倒
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/i,// webpack5资源模块
                type: 'asset/resource'
            }
        ]
    }
}