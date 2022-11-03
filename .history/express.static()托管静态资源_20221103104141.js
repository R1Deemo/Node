const express = require('express')
const app = express()
app.use('/files', express.static('./files'))
app.use('/abcd', express.static('./test'))
app.listen(80, () => {
    console.log('运行')
})