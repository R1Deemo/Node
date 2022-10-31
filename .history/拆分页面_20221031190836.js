const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/



fs.readFile(path.join(__dirname, 'index.html'), function(err, dataStr) {
    if (err) {
        return console.log('读文件失败')
    }
    console.log(dataStr)
})