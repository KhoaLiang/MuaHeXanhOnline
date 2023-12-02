'use strict'
const express = require("express")
const router = express.Router()
const { asyncHandler } = require("../helpers/asyncHandler")
const accessController = require("../controllers/access.controller")
const projectController = require("../controllers/project.controller")
const userController = require("../controllers/user.controller")

router.get('')
router.post('/v1/api/user/register', asyncHandler(accessController.register))
router.post('/v1/api/user/login', asyncHandler(accessController.login))
// router.post('/v1/api/user/logout', asyncHandler(accessController.logout))

router.post('/v1/api/user/forgotpassword', asyncHandler(accessController.forgotPassword))
router.post('/v1/api/user/resetpassword', asyncHandler(accessController.resetPassword))

router.post('/v1/api/project', asyncHandler(projectController.postProject))
router.get('/v1/api/project/all', asyncHandler(projectController.getAllProjects))
router.get('/v1/api/project/:project_id', asyncHandler(projectController.getProjectById))
router.patch('/v1/api/project/:project_id', asyncHandler(projectController.updateProject))
router.delete('/v1/api/project/:project_id', projectController.deleteProjectById)

router.patch('/v1/api/project/verify/:project_id', asyncHandler(projectController.verifyProject))
router.put('/v1/api/project/verified_projects', asyncHandler(projectController.getAllVerifiedProjects))

router.get('/v1/api/student/all', asyncHandler(userController.getAllStudents))
router.get('/v1/api/student/:mssv', asyncHandler(userController.getStudentByMSSV))
router.put('/v1/api/student/:mssv', asyncHandler(userController.updateInfoStudent))

module.exports = router