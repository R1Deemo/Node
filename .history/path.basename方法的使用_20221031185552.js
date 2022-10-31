const path = require('path')
const fpath = '/a/b/c/index.html'
var fullname = path.basename(fpath)
console.log(fullname)
var without = path.basename(fpath, '.html')
console.log(without)