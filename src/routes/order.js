const Order = require('../models/Order')
const express = require('express')
const router = express.Router()

router.get('/', Order.read)
router.get('/:id', Order.readOne)
router.put('/:id', Order.update)
router.post('/', Order.create)
router.delete('/:id', Order.remove)

module.exports = router