const http = require('http')
const server = http.createServer()
server.on('request', (req) => {
    // req.url是客户端请求的url地址
    const url = req.url
    const method = req.method
    const str = `your request is ${url}`
    console.log(str)

})
server.listen(80, () => {
    console.log('运行')
})