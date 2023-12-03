'use stric'

const express = require('express')
const router = express.Router()

router.use('/v1/api', require("./access"))
router.use('/v1/api/project', require("./project"))
router.use('/v1/api/student', require("./user"))
router.use('/v1/api/application', require("./application"))

module.exports = router