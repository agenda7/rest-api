const Service = require('../models/Service')
const express = require('express')
const router = express.Router()

router.get('/', Service.read)
router.get('/search/:query', Service.search)
router.get('/:id', Service.readOne)
router.put('/:id', Service.update)
router.post('/', Service.create)
router.delete('/:id', Service.remove)

module.exports = router