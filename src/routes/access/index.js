'use strict'

const express = require("express")
const accessController = require("../../controllers/access.controller")
const router = express.Router()
const { asyncHandler } = require("../../helpers/asyncHandler")

router.post('/user/register', asyncHandler(accessController.register))
router.post('/user/login', asyncHandler(accessController.login))

module.exports = router