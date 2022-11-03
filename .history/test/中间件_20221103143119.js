const express = require('express')
const app = express()


const mw = function(req, res, next) {
    console.log('这是最简单的中间件函数')

    next()

}

// 将mw注册为全局生效的中间件
app.use(mw)

app.listen(80, () => {
    console.log('run')
})