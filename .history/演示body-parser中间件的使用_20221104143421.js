const express = require('express')
const app = express()
const parser = require('body-parser')

app.use(parser.urlencoded({ extended: false }))
    // const mw = function (req,res,next) {

// }
app.post('/user', (req, res) => {
    //没有配置任何中间件的情况下，req.body默认等于undefined
    console.log(req.body)
    res.send('ok')
})
app.listen(80, () => {
    console.log('run')
})