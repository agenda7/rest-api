const User = require('../models/User')
const express = require('express')
const router = express.Router()

const read = (req, res) => {
  User.getAll((err, result, fields) => {
    if (err) throw err
    console.log(result)
    res.send(result)
  })
}

const readOne = (req, res) => {
  res.send(null)
}

const update = (req, res) => {
  res.send(null)
}

const create = (req, res) => {
  res.send(null)
}

const remove = (req, res) => {
  res.send(null)
}

router.get('/', read)
router.get('/:id', readOne)
router.put('/:id', update)
router.post('/', create)
router.delete('/:id', remove)

module.exports = router