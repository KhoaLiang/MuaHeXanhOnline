'use strict'

const ApplicationService = require("../services/application.service")
const {CREATED, SuccessResponse} = require("../core/success.response")

class ApplicationController {
    createApplication = async (req, res, next) => {
        new CREATED({
            message: "Create application successfully!",
            metadata: await ApplicationService.createApplication(req.body)
        }).send(res)
    }

    getApplicationById = async (req, res) => {
        const applyId = req.params.apply_id;
      
        const result = await ApplicationService.getApplicationById(applyId)
      
        if (result.success) {
            res.json(result);
        } else {
            res.status(404).json(result);
        }
    };

    getAllApplication = async (req, res) => {
        new SuccessResponse({
            metadata: await ApplicationService.getAllApplication()
        }).send(res)
    };

    approveApplication = async (req, res) => {
        const apply_id = req.params.apply_id
        const status = req.body.status
        new SuccessResponse({
            metadata: await ApplicationService.approveApplication({apply_id, status})
        }).send(res)
    }
    
    deleteApplicationById = async (req, res) => {
        const applicationId = req.params.apply_id;
        const result = await ProjectService.deleteProjectById(applicationId);
        if (result.success) {
            res.json(result);
        } else {
            res.status(404).json(result);
        }
    }
}

module.exports = new ApplicationController()