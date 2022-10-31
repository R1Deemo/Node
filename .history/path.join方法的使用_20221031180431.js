const path = require('path')
const pathStr = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr)
const ps = path.join(__dirname + '/file/1.text')
console.log(ps)
const fs = require('fs')
fs.readFile(ps, 'utf8', function(err, dataStr) {
    if (err) {
        return console.log(err)
    }
    console.log(dataStr)
})