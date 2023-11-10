'use strict'

const ProjectService = require("../services/project.service")
const {OK, CREATED, SuccessResponse} = require("../core/success.response")
const Project = require("../models/project.model");
const { BadRequestError } = require("../core/error.response");


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
      new SuccessResponse({
        metadata: await ProjectService.getAllProjects()
    }).send(res)
    };

    updateProject = async (req, res) => {
      const project_id = req.params.project_id;
      const data_project = req.body;
      const result = await ProjectService.updateProject({project_id, data_project})
      if (result.success) {
        res.json(result);
      } else {
        res.status(404).json(result);
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