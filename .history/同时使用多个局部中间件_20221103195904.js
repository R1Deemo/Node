const server = require('server')
const app = server()

const mw = function(req, res, next) {
    console.log('第一个局部中间件')
    next()
}
const mw2 = function(req, res, next) {
    console.log('第二个局部中间件')
    next()
}
app.get('/', mw1, mw2, (req, res) => {
    console.log('路由')
})



app.listen(80, () => {
    console.log('run')
})