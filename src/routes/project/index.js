'use strict'

const express = require("express")
const projectController = require("../../controllers/project.controller")
const router = express.Router()
const { asyncHandler } = require("../../helpers/asyncHandler")

router.post('', asyncHandler(projectController.postProject))
router.get('/all', asyncHandler(projectController.getAllProjects))
router.put('/:project_id', asyncHandler(projectController.updateProject))
router.delete('/:project_id', projectController.deleteProjectById)
router.put('/verify/:project_id', asyncHandler(projectController.verifyProject))
router.put('/verified_projects', asyncHandler(projectController.verifyProject))

module.exports = router