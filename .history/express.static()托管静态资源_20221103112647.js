const express = require('express')
    // const userRouter = require('./router')
const app = express()
app.use('/files', express.static('./files'))
app.use('/abcd', express.static('./test'))
app.use(userRouter)

app.listen(80, () => {
    console.log('运行')
})