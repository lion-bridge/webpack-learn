const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const publicPath = path.resolve(__dirname, './dist')
console.log('publicPath=', publicPath)
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './index.js'),
    output: {
        filename: '[name].chunk.js',
        path: publicPath,
        clean: true,
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            open: true
        })
    ],
    devServer: {
        contentBase: publicPath,
        port: 3002
    }
}