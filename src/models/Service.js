const db = require('../config/db')
const ServiceQueries = require('../queries/service')

class Service {
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
    db.query(ServiceQueries.read, Service.callback(req, res))
  }

  static readOne (req, res) {
    db.query(ServiceQueries.readOne(req.params.id), Service.callback(req, res))
  }

  static create (req, res) {
    db.query(ServiceQueries.create, req.body, Service.callback(req, res))
  }

  static update (req, res) {
    db.query(ServiceQueries.update(req.params.id), req.body, Service.callback(req, res))
  }

  static remove (req, res) {
    db.query(ServiceQueries.remove(req.params.id), Service.callback(req, res))
  }

  static search (req, res) {
    db.query(ServiceQueries.search(req.params.query), Service.callback(req, res))
  }
}

module.exports = Service