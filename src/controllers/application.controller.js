"use strict";

const ApplicationService = require("../services/application.service");
const { OK, CREATED } = require("../core/success.response");

class ApplicationController {
  getApplications = async (req, res) => {
    const applyId = req.query.apply_id;
    console.log(req)
    if (applyId) {
      const result = await ApplicationService.getApplicationById(applyId);

      if (result.success) {
        res.json(result);
      } else {
        res.status(404).json(result);
      }
    } else {
      const result = await ApplicationService.getAllApplication();
      if (result.success) {
        res.status(200).json(result);
      } else {
        res.status(500).json(result);
      }
    }
  };

  createApplication = async (req, res, next) => {
    try {
      const application = await ApplicationService.createApplication(req.body);
      res.status(201).json({
        message: "Application created successfully",
        metadata: application,
      });
    } catch (error) {
      console.error("Error", error);
      res
        .status(400)
        .json({ error: "Cannot create application at the moment" });
    }
  };

  deleteApplicationById = async (req, res) => {
    const applicationId = req.query.apply_id;
    const result = await ApplicationService.deleteApplicationById(
      applicationId
    );
    if (result.success) {
      res.json(result);
    } else {
      res.status(404).json(result);
    }
  };
}

module.exports = new ApplicationController();
