const express = require('express')
const router = express.Router()

router.get('/get', (req, res) => {
    // 通过req.query获取客户端通过查询字符串发送到服务器的数据
    const query = req.query
    res.send({
        status: 0, //0表示成功，1表示失败
        msg: 'get请求成功',
        data: query
    })
})


router.post('/post', (req, res) => {
    // 通过req.query获取客户端通过查询字符串发送到服务器的数据
    const body = req.body
    res.send({
        status: 0, //0表示成功，1表示失败
        msg: 'post请求成功',
        data: body
    })
})
module.exports = router