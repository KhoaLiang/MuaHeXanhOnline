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
      const foundProject = Project.findOne({where: {project_id}})
      if (!foundProject) {
        throw new BadRequestError('Not found project for updating!')
      }
      console.log(`body`, req.body)
      Project.update(req.body, {
        where: {project_id: project_id}
      }).then(num => {
        if (num == 1) {
          res.send({
            message: "Project was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Project with project_id=${project_id}. Maybe Project was not found or req.body is empty!`
          });
        }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating project with project_id=" + project_id
          });
        })
    }

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