const config = require('../webpack.config');
const Express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware')

const app = Express();
const compiler =  webpack(config);

app.use(WebpackDevMiddleware(compiler,{
    publicPath: config.output.publicPath
}));

app.listen(91,function(){
    console.log('启动成功')
})