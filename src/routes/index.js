'use strict'

const express = require('express')
const router = express.Router()

// check apiKey
// router.use(apiKey)

// check permission
// router.use(permission('0000'))

router.use('/v1/api/student', require('./user'))
router.use('/v1/api/project', require('./project'))
router.use('/v1/api', require('./access'))

module.exports = router