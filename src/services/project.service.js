'use strict'

const { BadRequestError } = require("../core/error.response");
const Project = require("../models/project.model");
const { getInfoData } = require("../utils");

class ProjectService  {
    static postProject = async ({location, school, content}) => {
        const newProject = new Project({location, school, content});

        const savedProject = await newProject.save().catch((error) => {
            console.log("Error: ", error)
            throw new BadRequestError('Error: Cannot post project at the moment')
        })
        if (savedProject) {
            return {
                code: 201,
                message_data: savedProject
            }
        }
        return {
            code: 200,
            metadata: null
        }
        
    }

    static getProjectById = async (project_id) => {
        try {
            const project = await Project.findOne({ where: { project_id } });
            
            if (project) {
              return {
                success: true,
                data: project,
              };
            } else {
              return {
                success: false,
                error: "Project not found",
              };
            }
          } catch (error) {
            console.error('Failed to retrieve project data: ', error);
            return {
              success: false,
              error: "An error occurred",
            };
          }
    }

    static updateProject = async ({projectId, number_of_students}) => {

    }

    static getAllProjects = async () => {
        try {
          const projects = await Project.findAll();
          return {
            success: true,
            data: projects,
          };
        } catch (error) {
          console.error('Failed to retrieve project data: ', error);
          return {
            success: false,
            error: "An error occurred",
          };
        }
    }

    static deleteProject = async (projectId) => {
        const foundProject = await Project.findOne({where: {project_id: projectId}}).catch(
            (err) => {
                console.log("Error:", err)
            }
        )
        if (!foundProject) {
            throw new BadRequestError("Tour isn't exist!")
        }
        return Project.destroy({where: {project_id: projectId}})
    }
}

module.exports = ProjectService 