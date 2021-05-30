
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

const outputPath = path.resolve(__dirname, './dist');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',// 生产环境应该屏蔽
    entry: {
        index: './src/index.js',
    },
    devServer: {
        contentBase: outputPath,// 热重载，监听目录
        compress: true,
        open: true,
        port: 3002,
    },
    output: {
        filename: '[name:8].[chunkhash:8].js',// 可变模板字符串
        // filename: (pathData = {}) => {
        //     console.log('pathData=', pathData)
        //     return pathData.chunk.name
        // },
        path: outputPath,
        clean: true,// 每次编译都清除`dist/`文件夹
        publicPath: '/'
    },
    optimization: {
        moduleIds: 'deterministic', // 不允许verders.js的hash发生变化
        splitChunks: {// 将import()动态导入的模块，合并成新的chunk
            chunks: 'all',
            cacheGroups: {// 将node_modules里的所有依赖，合并到`vendors.js`中
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        },
        // runtimeChunk: 'single',// 
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
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname,'src'),
                loader: ''
            }
        ]
    }
}