// console.log('hello')

const fs = require('fs')
    // fs.readFile('./files/1.txt', 'utf-8',
    //     function(err, dataStr) {
    //         console.log(err)
    //         console.log('hello')
    //         console.log(dataStr)
    //     })

fs.writeFile('./files/6.txt', 'asdasdasd', function(err) {
    if (err) {
        return console.log('写入失败')
    }
    return console.log('写入成功')
})
fs.readFile('./files/6.txt', 'utf-8',
    function(err, dataStr) {
        console.log(err)
        console.log('hello')
        console.log(dataStr)
    })