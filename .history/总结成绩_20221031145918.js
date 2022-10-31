const fs = require('fs')
fs.readFile('./files/成绩.txt', function(err, dataStr) {
    if (err) {
        return console.log('读取失败')
    }
    console.log(dataStr)
    const arr = dataStr.split('')
    const arrnew = []
    arr.forEach(item => {
        arrnew.push(item.replace('=', ':'))
    })
    const newStr = arrnew.join('\r\n')
    fs.writeFile('.files/成绩-ok.txt', newStr, function(err) {
        if (err) {
            return console.log('写入失败')
        }
        fs.readFile('./files/成绩-ok.txt', function(err, dataStr) {
            if (err) {
                return console.log('读取失败')
            }
            console.log(dataStr)
        })
    })

})