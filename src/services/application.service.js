"use strict";

const { BadRequestError } = require("../core/error.response");
const Application = require("../models/application.model");

class ApplicationService {
  static getApplicationById = async (apply_id) => {
    try {
      const apply = await Application.findOne({ where: { apply_id } });

      if (apply) {
        return {
          success: true,
          data: apply,
        };
      } else {
        return {
          success: false,
          error: "Application not found",
        };
      }
    } catch (error) {
      console.error("Failed to retrieve application data: ", error);
      return {
        success: false,
        error: "An error occurred",
      };
    }
  };

  static getAllApplication = async () => {
    try {
      const applies = await Application.findAll();
      return {
        success: true,
        data: applies,
      };
    } catch (error) {
      console.error("Failed to retrieve applications data: ", error);
      return {
        success: false,
        error: "An error occurred",
      };
    }
  };

  static createApplication = async ({ student_id, project_id }) => {
    const newApplication = new Application({ student_id, project_id });

    const savedApplication = await newApplication.save().catch((error) => {
      console.log("Error", error);
      return new BadRequestError(
        "Error: Cannot create application at the moment"
      );
    });
    if (savedApplication) {
      return {
        code: 201,
        message_data: savedApplication,
      };
    }
    return {
      code: 200,
      metadata: null,
    };
  };

  static deleteApplicationById = async (applicationId) => {
    try {
      const application = await Application.findOne({
        where: { apply_id: applicationId },
      });
      if (!application) {
        return {
          success: false,
          error: "Application not found",
        };
      }
      await application.destroy();

      return {
        success: true,
        message: "Application deleted successfully",
      };
    } catch (error) {
      console.error("Failed to delete application: ", error);
      return {
        success: false,
        error: "An error occured",
      };
    }
  };
}

module.exports = ApplicationService;
