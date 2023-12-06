'use strict'

const express = require("express")
const userController = require("../../controllers/user.controller")
const router = express.Router()
const { asyncHandler } = require("../../helpers/asyncHandler")
const { authenticationStudent } = require("../../auth/authUtils")

router.get('/all', asyncHandler(userController.getAllStudents))
router.use(authenticationStudent)
router.get('/:mssv', asyncHandler(userController.getStudentByMSSV))
router.put('/:mssv', asyncHandler(userController.updateInfoStudent))
module.exports = router