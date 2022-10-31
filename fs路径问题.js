const fs = require('fs')

// 用__dirname拼接路径不会产生问题
fs.readFile(__dirname + '/files/1.txt', 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log('读取失败' + err.message)
    }
    console.log('读取成功')
})