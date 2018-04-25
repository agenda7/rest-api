const db = require('../config/db')
const UserQueries = require('../queries/order')

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
    db.query(Order.read, Order.callback(req, res))
  }

  static readOne (req, res) {
    db.query(Order.readOne(req.params.id), Order.callback(req, res))
  }

  static create (req, res) {
    db.query(Order.create(req.params.wallace), Order.callback(req, res))
  }

  static update (req, res) {
    db.query(Order.update(req.params), Order.callback(req, res))
  }

  static remove (req, res) {
    db.query(Order.remove(req.params.id), Order.callback(req, res))
  }
}

module.exports = Order