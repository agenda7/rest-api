const db = require('../config/db')
const UserQueries = require('../queries/user')

class User {
  constructor (args) {
    // code
  }

  static callback (req, res) {
    return (err, result, fields) => {
      if (err) throw err
      console.log(result)
      res.send(result)
    }
  }

static read (req, res) {
    db.query(UserQueries.read, Service.callback(req, res))
  }

  static readOne (req, res) {
    db.query(UserQueries.readOne(req.params.id), Service.callback(req, res))
  }

  static create (req, res) {
    db.query(UserQueries.create, req.body, Service.callback(req, res))
  }

  static update (req, res) {
    db.query(UserQueries.update(req.params.id), req.body, Service.callback(req, res))
  }

  static remove (req, res) {
    db.query(UserQueries.remove(req.params.id), Service.callback(req, res))
  }

  static search (req, res) {
    db.query(UserQueries.search(req.params.query), Service.callback(req, res))
  }
}

module.exports = User