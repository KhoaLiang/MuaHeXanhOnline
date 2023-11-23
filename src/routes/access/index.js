'use strict'

const express = require('express')
const accessController = require('../../controllers/access.controller')
const router = express.Router()
const { asyncHandler} = require('../../helpers/asyncHandler')

// shopSignup
router.post('/user/signup', asyncHandler(accessController.signUp))
router.post('/user/login', asyncHandler(accessController.login))
// router.post('/shop/logout', asyncHandler(accessController.logout))

module.exports = router