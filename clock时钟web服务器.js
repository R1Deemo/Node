const fs = require('fs')
const path = require('path')
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, '/files/index.html')
    } else {
        fpath = path.join(__dirname, '/files', url)
    }

    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) {
            return res.end('404 not found')
        }

        res.end(dataStr)
    })
})

server.listen(80, () => {
    console.log('运行')
})