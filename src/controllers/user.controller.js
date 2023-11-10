'use strict'

const UserService = require("../services/user.service")
const {OK, SuccessResponse} = require("../core/success.response")
const User = require("../models/user.model")

class UserController {
    getStudentByMSSV = async (req, res, next) => {
        const mssv = req.params.mssv;
        const result = await UserService.getStudentByMSSV(mssv);

        if (result.success) {
            res.json(result)
        } else {
            res.status(404).json(result)
        }
    }

    getAllStudents = async (req, res) => {
        new SuccessResponse({
            metadata: await UserService.getAllStudents()
        }).send(res)
    }
}

module.exports = new UserController()