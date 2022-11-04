const express = require('express')

const app = express()
    // 导入自定义路由模块
const router = require('./apirouter')
    // 把路由模块注册到app上
app.use('/api', router)



app.listen(80, () => {
    console.log('run')
})