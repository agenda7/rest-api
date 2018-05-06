const db = require('../config/db')
const OrderQueries = require('../queries/order')

class Order {
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
    db.query(OrderQueries.read, Service.callback(req, res))
  }

  static readOne (req, res) {
    db.query(OrderQueries.readOne(req.params.id), Service.callback(req, res))
  }

  static create (req, res) {
    db.query(OrderQueries.create, req.body, Service.callback(req, res))
  }

  static update (req, res) {
    db.query(OrderQueries.update(req.params.id), req.body, Service.callback(req, res))
  }

  static remove (req, res) {
    db.query(OrderQueries.remove(req.params.id), Service.callback(req, res))
  }

}

module.exports = Order