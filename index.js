// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const config = require('./src/config')

// Express
const app = express()

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin)
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
  res.header("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT,DELETE,OPTIONS")
  res.header("Access-Control-Allow-Credentials", "true")
  next()
})

// Enable CORS Pre-Flight
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const routes = require('./src/routes')(app)

// Start server
app.listen(config.port, function () {
  console.log(config.env + ', Listening on server port ' + config.port)
})
