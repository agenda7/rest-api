const User = require('../models/User')
const express = require('express')
const router = express.Router()

router.get('/', User.read)
router.get('/:id', User.readOne)
router.put('/:id', User.update)
router.post('/', User.create)
router.delete('/:id', User.remove)

module.exports = router