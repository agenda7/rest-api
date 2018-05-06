const db = require('../config/db')
const CompanyQueries = require('../queries/company')

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
    db.query(CompanyQueries.read, Service.callback(req, res))
  }

  static readOne (req, res) {
    db.query(CompanyQueries.readOne(req.params.id), Service.callback(req, res))
  }

  static create (req, res) {
    db.query(CompanyQueries.create, req.body, Service.callback(req, res))
  }

  static update (req, res) {
    db.query(CompanyQueries.update(req.params.id), req.body, Service.callback(req, res))
  }

  static remove (req, res) {
    db.query(CompanyQueries.remove(req.params.id), Service.callback(req, res))
  }

  static search (req, res) {
    db.query(CompanyQueries.search(req.params.query), Service.callback(req, res))
  }
}


module.exports = Company