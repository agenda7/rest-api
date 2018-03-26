const config = require('../config')
const users = require('./users')

module.exports = app => {
  app.use(config.endpoint + '/users', users)
}