const path = require('path')
const fpath = '/a/b/c/index.html'
var fullname = path.basename(fpath)
console.log(fullname) //index.html
var without = path.basename(fpath, '.html')
console.log(without) //index
console.log(path.extname(fpath)) //.html