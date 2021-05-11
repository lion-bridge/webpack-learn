// 运行一个express中间件
const express = require('express')

const app = express()

function middlewareA (req, rep, next){
    console.log('A before')
    next();
    console.log('A after')
}
function middlewareB (req, rep, next){
    console.log('B before')
    next();
    console.log('B after')
}
function middlewareC (req, rep, next){
    console.log('C before')
    next();
    console.log('C after')
}

app.use(middlewareA)
app.use(middlewareB)
app.use(middlewareC)

app.listen(30,function(){
    console.log('listen 30 success')
})