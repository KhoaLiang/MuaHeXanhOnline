'use strict'

const express = require("express")
const accessController = require("../../controllers/access.controller")
const router = express.Router()
const { asyncHandler } = require("../../helpers/asyncHandler")

router.post('/user/register', asyncHandler(accessController.register))
router.post('/user/login', asyncHandler(accessController.login))

router.post('/user/forgotpassword', asyncHandler(accessController.forgotPassword))
router.post('/user/resetpassword', asyncHandler(accessController.resetPassword))

module.exports = router