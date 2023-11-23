'use strict'

const express = require('express')
const projectController = require('../../controllers/project.controller')
const router = express.Router()
const { asyncHandler } = require('../../helpers/asyncHandler')

router.post('', asyncHandler(projectController.postProject))
router.put('/:project_id', asyncHandler(projectController.updateProject))
router.get('/all_projects', asyncHandler(projectController.getAllProjects))
router.get('/:project_id', asyncHandler(projectController.getProjectById))
router.delete('/:project_id', asyncHandler(projectController.deleteProjectById))

// verify project
router.put('/verify_project/:project_id', asyncHandler(projectController.verifyProject))

// get all verified projects
router.get('/verified_projects', asyncHandler(projectController.getAllVerifiedProjects))

module.exports = router