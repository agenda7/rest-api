const mysql = require('mysql')
const config = require('./index')

const db = mysql.createConnection(config.mysql)

db.connect(err => {
  if (err) throw err
  console.log("MySQL connected!")
})

module.exports = db