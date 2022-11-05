const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'my_db_01',
})

// 向user表中，新增一条数据

// const user = {
//     username: 'super',
//     password: 'pc123556'
// }
// const sqlStr = 'insert into user (username,password) values (?,?)'

// db.query(sqlStr, [user.username, user.password], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功')
//     }
// })


//插入数据的便捷方式
// const user = {e
//     username: 'super',
//     password: 'pc123556'
// }
// const sqlStr = 'insert into user set ?'
// db.query(sqlStr, user, (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功')
//     }
// })

// 变更新的数据对象
// const user = { id: 5, username: 'aaa', password: 'admiun' }
// const sqlStr = 'update user set username=?,password=?where id=?'

// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.emessage)
//     if (results.affectedRows === 1) {
//         console.log('跟新数据成功')
//     }
// })

//更新数据的便捷方式
// const user = { id: 3, username: 'aaaaaa', password: 'adaamiun' }
// const sqlStr = 'update user set ? where id=?'

// db.query(sqlStr, [user, user.id], (err, results) => {
//     if (err) return console.log(err.emessage)
//     if (results.affectedRows === 1) {
//         console.log('跟新数据成功')
//     }
// })

// 删除数据
// const sqlStr = 'delete from user where id=?'
// db.query(sqlStr, 5, (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1)
//         console.log('删除成功')
// })

// 标记删除,将status设置为1，表示为删除
const sqlStr = 'update user set status=1 where id=?'
db.query(sqlStr, 6, (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1)
        console.log('删除成功')
})