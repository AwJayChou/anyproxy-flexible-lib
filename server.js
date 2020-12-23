const koa = require('koa')
const fs = require('fs')
const static = require('koa-static')
const app = new koa();
const port = 8888
const url = './dist'
app.use(static(__dirname, url))
app.use((ctx, next) => {
    // 页面直接渲染错误 需要以静态文件访问的形式
    // const file = fs.readFileSync('./dist/index.html')
    // ctx.body = file.toString();
    // ctx.body = fs.createReadStream('./dist/index.html')

    next()
})

app.listen(port, () => {
    console.log(' server is running on port ' + port)
})