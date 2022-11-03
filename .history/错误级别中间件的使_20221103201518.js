const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // 人为制造错误
    throw new Error('服务器发生了错误')
    res.send('Home')

})
app.use((err, req, res, next) => {
    // 人为制造错误
    res.send(err)
    next()
})


app.listen(80, function() {

})