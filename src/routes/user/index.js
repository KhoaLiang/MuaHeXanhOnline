'use strict'

const express = require('express')
const userController = require('../../controllers/user.controller')
const router = express.Router()
const { asyncHandler } = require('../../helpers/asyncHandler')

router.get('/:mssv', asyncHandler(userController.getStudentByMSSV))
router.get('/students', asyncHandler(userController.getAllStudents))
router.put('/:mssv', asyncHandler(userController.updateInfoStudent))

module.exports = router