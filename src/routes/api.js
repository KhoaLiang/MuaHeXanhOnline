''
const express = require("express")
const router = express.Router()
const { asyncHandler } = require('../auth/checkAuth')
const accessController = require("../controllers/access.controller")
const projectController = require("../controllers/project.controller")
const userController = require("../controllers/user.controller")

router.get('')
router.post('/api/register', asyncHandler(accessController.register))
router.post('/api/login', asyncHandler(accessController.login))
router.post('/api/logout', asyncHandler(accessController.logout))

router.post('/api/postproject', projectController.postProject)
router.put('/api/updateproject/:project_id', projectController.updateProject)
router.get('/api/getallproject', projectController.getAllProjects)
router.get('/api/getoneproject/:project_id', projectController.getProjectById)
router.post('/api/deleteproject/:project_id', projectController.deleteProjectById)
router.put('/api/verifyproject/:project_id', projectController.verifyProject)
router.get('/api/verifiedprojects', projectController.getAllVerifiedProjects)

router.get('/api/students/:mssv', userController.getStudentByMSSV)
router.get('/api/students', userController.getAllStudents)
router.put('/api/updatestudent/:mssv', userController.updateInfoStudent)

module.exports = router