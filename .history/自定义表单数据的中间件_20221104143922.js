const express = require('express')
const app = express()

// 解析表单数据的中间件
app.use((req, res, next) => {

})
app.listen(80, () => {
    console.log('run')
})