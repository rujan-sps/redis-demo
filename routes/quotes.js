const express = require('express')
const { getQuotes } = require('../controllers/quotes')
const { redisData } = require('../middleware/redis')
const router = express.Router()

router.get('/',redisData('quotes'),getQuotes)

module.exports = router