const http = require('http');

// express middleware原理
// [Express中间件的原理及实现](https://www.jianshu.com/p/797a4e38fe77)
function express(){
    const middlewares = [];
    const app = function (req,res){
        let i = 0;
        function next (){
            console.log('i=',i)
            const task = middlewares[i++];
            if (!task) return;
            task(req, res, next);
        }
        next();
    }
    app.use = function(middleware){
        middlewares.push(middleware);
    }
    return app;
}

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


const app = express();
app.use(middlewareA)
app.use(middlewareB)
app.use(middlewareC)

http.createServer(app).listen(31,function(){
    console.log('listen 31 success')
});
