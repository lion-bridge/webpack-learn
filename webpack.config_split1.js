// 代码分离，entry方式


const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

const outputPath = path.resolve(__dirname, './dist');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',// 生产环境应该屏蔽
    entry: {
        index: './src/index.js',
        sum:'./src/js/sum.js',
        shared: './src/js/Subject.js'
    },
    devServer: {
        contentBase: outputPath,// 热重载，监听目录
        compress: true,
        open: true,
    },
    output: {
        filename: '[name].chrunk.js',
        path: outputPath,
        clean: true,// 每次编译都清除`dist/`文件夹
        publicPath: '/'
    },
    optimization: { // 代码分离
        splitChunks:{
            chunks: 'all',
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',// 使用模板
            scriptLoading: 'blocking',// 禁用<script defer>
        }),
        new WebpackManifestPlugin()
    ],
    module: {
        rules: [
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