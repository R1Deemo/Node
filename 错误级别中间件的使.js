const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // 人为制造错误
    throw new Error('服务器发生了错误')
    res.send('Home')

})

// 错误级别中间件     必须注册在所有路由之后
app.use((err, req, res, next) => {
    // 人为制造错误
    res.send(err.message)
        // next()
})


app.listen(80, function() {

})