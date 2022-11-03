const express = require('express')
const app = express()
app.get('/user', (req, res) => {
    res.send({ name: 'zs', age: 20, gender: '男' })
})
app.post('/user', (req, res) => {
    res.send('请求成功')
})
app.listen(80, () => {
    console.log('运行')
})
app.get('/', (req, res) => {
    console.log(req.query) //获取发送到服务器的参数
})

//此处的:id是一个动态的参数
app.get('/user/:iddsf', (req, res) => {
    // req.params是动态匹配到的url参数，默认也是一个空对象
    console.log(req.params)
    res.send(req.params)
})