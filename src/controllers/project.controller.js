'use strict'

const ProjectService = require("../services/project.service")
const {OK, CREATED, SuccessResponse} = require("../core/success.response")

class ProjectController {
    postProject = async (req, res, next) => {
        new CREATED({
            message: "Post project successfully!",
            metadata: await ProjectService.postProject(req.body)
        }).send(res)
        // return await ProjectService.postProject(req.body)
    }
}

module.exports = new ProjectController()