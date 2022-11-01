const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    // req.url是客户端请求的url地址
    const url = req.url
    const method = req.method
    const str = `your request is ${url}`
    console.log(str)
        //向客户端响应数据
        // 为了防止中文乱码问题，需要设置响应头Content - Type的值位text / html;charset = utf - 8
    res.setHeader('Content-Type', 'text/html;charset = utf-8')

    res.end(str)

})
server.listen(80, () => {
    console.log('运行')
})