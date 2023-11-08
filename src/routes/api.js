''
const express = require("express")
const router = express.Router()
const { asyncHandler } = require('../auth/checkAuth')
const accessController = require("../controllers/access.controller")
const projectController = require("../controllers/project.controller")

router.get('')
router.post('/api/register', asyncHandler(accessController.register))
router.post('/api/login', asyncHandler(accessController.login))
router.post('/api/logout', asyncHandler(accessController.logout))

router.post('/api/postproject', projectController.postProject)

module.exports = router