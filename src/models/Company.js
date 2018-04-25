const db = require('../config/db')
const UserQueries = require('../queries/company')

class Company {
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
    db.query(CompanyQueries.read, Company.callback(req, res))
  }

  static readOne (req, res) {
    db.query(CompanyQueries.readOne(req.params.id), Company.callback(req, res))
  }

  static create (req, res) {
    db.query(CompanyQueries.create(req.params.wallace), Company.callback(req, res))
  }

  static update (req, res) {
    db.query(CompanyQueries.update(req.params), Company.callback(req, res))
  }

  static remove (req, res) {
    db.query(CompanyQueries.remove(req.params.id), Company.callback(req, res))
  }
}

module.exports = Company