const express = require('express')
const app = express()
    //使用express.json()解析
app.use(express.json())
    //使用express.urlencoded解析
app.use(express.urlencoded())

app.post('/user', (req, res) => {
    console.log(req.body)
})

app.post('/book', (req, res) => {
    console.log(req.body)
})
app.listen(80, () => {
    console.log('run')
})