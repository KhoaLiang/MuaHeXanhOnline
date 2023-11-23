''
const express = require("express")
const router = express.Router()
const { asyncHandler } = require('../auth/checkAuth')
const accessController = require("../controllers/access.controller")
const projectController = require("../controllers/project.controller")
const userController = require("../controllers/user.controller")

router.get('')
router.post('/v1/api/user/register', asyncHandler(accessController.register))
router.post('/v1/api/user/login', asyncHandler(accessController.login))
// router.post('/v1/api/user/logout', asyncHandler(accessController.logout))
router.post('/v1/api/user/forgotpassword', asyncHandler(userController.forgotPassword))

router.post('/v1/api/project', asyncHandler(projectController.postProject))
router.get('/v1/api/project/all', asyncHandler(projectController.getAllProjects))
router.put('/v1/api/project/:project_id', asyncHandler(projectController.updateProject))
router.delete('/v1/api/project/:project_id', projectController.deleteProjectById)
router.put('/v1/project/verify/:project_id', asyncHandler(projectController.verifyProject))
router.put('/v1/project/verified_projects', asyncHandler(projectController.verifyProject))

router.get('/v1/api/student/:mssv', asyncHandler(userController.getStudentByMSSV))
router.get('/v1/api/student/all', asyncHandler(userController.getAllStudents))
router.put('/v1/api/student/:mssv', asyncHandler(userController.updateInfoStudent))

module.exports = router