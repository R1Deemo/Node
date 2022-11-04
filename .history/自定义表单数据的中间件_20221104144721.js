const express = require('express')
const app = express()

const qs = require('querystring')


// 解析表单数据的中间件
app.use((req, res, next) => {
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })
    req.on('end', () => {
        const body = qs.parse(str)
            // console.log(body)
        req.body = body
        next()
    })

})

app.post('/user', (req, res) => {
    res.send('ok')
})
app.listen(80, () => {
    console.log('run')
})