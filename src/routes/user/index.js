'use strict'

const express = require("express")
const userController = require("../../controllers/user.controller")
const router = express.Router()
const { asyncHandler } = require("../../helpers/asyncHandler")

router.get('/all', asyncHandler(userController.getAllStudents))
router.get('/:mssv', asyncHandler(userController.getStudentByMSSV))
router.put('/:mssv', asyncHandler(userController.updateInfoStudent))
module.exports = router