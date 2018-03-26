const db = require('../config/db')
const { readAll } = require('../queries/users')

class User {
  constructor (args) {
    // code
  }

  static getAll (callback) {
    return db.query(readAll, callback)
  }
}

module.exports = User