const Company = require('../models/Company')
const express = require('express')
const router = express.Router()

router.get('/', Company.read)
router.get('/search/:query', Company.search)
router.get('/:id', Company.readOne)
router.put('/:id', Company.update)
router.post('/', Company.create)
router.delete('/:id', Company.remove)

module.exports = router