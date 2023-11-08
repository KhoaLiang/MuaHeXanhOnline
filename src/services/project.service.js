'use strict'

const Project = require("../models/project.model")

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
}

module.exports =  ProjectService 