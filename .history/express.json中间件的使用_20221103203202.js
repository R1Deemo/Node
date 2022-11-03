const express = require('express')
const app = express()

app.use(express.json())
app.post('/user', (req, res) => {
    console.log(req.body)
})
app.listen(80, () => {
    console.log('run')
})