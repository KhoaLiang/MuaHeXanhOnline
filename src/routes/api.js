''
const express = require("express")
const router = express.Router()
const { asyncHandler } = require('../auth/checkAuth')
const accessController = require("../controllers/access.controller")
const projectController = require("../controllers/project.controller")
const applicationController = require("../controllers/application.controller")

router.get('')
router.post('/api/register', asyncHandler(accessController.register))
router.post('/api/login', asyncHandler(accessController.login))
router.post('/api/logout', asyncHandler(accessController.logout))

router.post('/api/postproject', projectController.postProject)
router.get('/api/getallproject', projectController.getAllProjects)
router.get('/api/getoneproject/:project_id', projectController.getProjectById)
router.post('/api/deleteproject/:project_id', projectController.deleteProjectById)

router.get('/api/application', applicationController.getApplications)
// router.get('/api/application/:apply_id', applicationController.getApplicationById)
router.post('/api/application', applicationController.createApplication)
router.delete('/api/application', applicationController.deleteApplicationById)

module.exports = router