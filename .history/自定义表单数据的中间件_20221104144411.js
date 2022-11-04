const express = require('express')
const app = express()

// 解析表单数据的中间件
app.use((req, res, next) => {
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })
    req.on('end', () => {
        console.log(str)
    })

})

app.post('/user', (req, res) => {
    res.send('ok')
})
app.listen(80, () => {
    console.log('run')
})