const config = require('../config')
const user = require('./user')
const company = require('./company')
const service = require('./service')
const order = require('./order')

module.exports = app => {
  app.use(config.endpoint + '/user', user)
  app.use(config.endpoint + '/company', company)
  app.use(config.endpoint + '/service', service)
  app.use(config.endpoint + '/order', order)
}