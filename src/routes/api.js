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
router.get('/api/getallproject', projectController.getAllProjects)
router.get('/api/getoneproject/:project_id', projectController.getProjectById)
router.post('/api/deleteproject/:project_id', projectController.deleteProjectById)

router.get('/api/students/:mssv', userController.getStudentByMSSV)
router.get('/api/students', userController.getAllStudents)
module.exports = router