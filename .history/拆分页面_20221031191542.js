const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/



fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读文件失败')
    }
    // console.log(dataStr)
    resolveCSS(dataStr)
        // resolveJS(dataStr)
        // resolveHTML(dataStr)

})

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    console.log(r1.split('\n'))



}