'use stric'

const express = require('express')
const router = express.Router()

router.use('/v1/api', require("./access"))
router.use('/v1/api/product', require("./project"))
router.use('/v1/api/user', require("./user"))

module.exports = router