const express = require('express')
const app = express()

//全局中间件
app.use((req, res, next) => {
    next()
})