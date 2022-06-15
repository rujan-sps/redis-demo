const express = require('express')
const { getUsers } = require('../controllers/users')
const { redisData } = require('../middleware/redis')
const router = express.Router()

router.get('/', redisData('users'),getUsers)

module.exports = router