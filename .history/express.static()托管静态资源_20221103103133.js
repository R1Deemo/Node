const express = require('express')
const app = express()
app.use(express.static('./files'))
app.listen(80, () => {
    console.log('运行')
})