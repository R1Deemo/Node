const fs = require('fs')
fs.readFile('./files/成绩.txt', 'utf-8', function(err, dataStr) {
    if (err) {
        return console.log('读取失败')
    }
    // console.log(dataStr)
    const arr = dataStr.split(' ')
        // console.log(arr)
    const arrnew = []
    arr.forEach(item => {
        arrnew.push(item.replace('=', ':'))
    })
    const newStr = arrnew.join('\r\n')
        // console.log(newStr)
    fs.writeFile('./files/成绩-ok.txt', newStr, function(err) {
        if (err) {
            return console.log('写入失败')
        }
        fs.readFile('./files/成绩-ok.txt', 'utf-8', function(err, dataStr) {
            if (err) {
                return console.log('读取失败')
            }
            console.log(dataStr)
        })
    })

})