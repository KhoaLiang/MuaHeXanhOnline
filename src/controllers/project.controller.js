'use strict'

const ProjectService = require("../services/project.service")
const {OK, CREATED} = require("../core/success.response")
const Project = require("../models/project.model");


class ProjectController {
    postProject = async (req, res, next) => {
        new CREATED({
            message: "Post project successfully!",
            metadata: await ProjectService.postProject(req.body)
        }).send(res)
    }

    getProjectById = async (req, res) => {
        const projectId = req.params.project_id;
      
        const result = await ProjectService.getProjectById(projectId);
      
        if (result.success) {
          res.json(result);
        } else {
          res.status(404).json(result);
        }
    };

    getAllProjects = async (req, res) => {
        const result = await ProjectService.getAllProjects();
        if (result.success) {
            res.status(200).json(result)
        } else {
            res.status(500).json(result)
        }
    };

    deleteProjectById = async (req, res) => {
        const projectId = req.params.project_id;
        const result = await ProjectService.deleteProjectById(projectId);
        if (result.success) {
          res.json(result);
        } else {
          res.status(404).json(result);
        }
    };
}

module.exports = new ProjectController()