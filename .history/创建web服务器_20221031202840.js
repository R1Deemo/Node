const http = require('http')

// 创建web服务器实例
const server = http.createServer()

server.on('request', )

server.listen(80, () => {
    console.log('服务器运行在127.0.0.1上')
})