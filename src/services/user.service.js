'use strict'

const User = require('../models/user.model')

const findUserByUsername = async (username) => {
    return await User.findOne({where: {username}})
}

class UserService {
    
    static getStudentByMSSV = async (mssv) => {
        try {
            const student = await User.findOne({where: {mssv}})
            if (student) {
                return {
                    success: true,
                    data: student
                }
            } else {
                return {
                    success: false,
                    error: "Student not found!"
                }
            }
        } catch (error) {
            console.error('Failed to retrieve project data: ', error)
            return {
                success: false,
                error: 'An error occurred'
            }
        }
    }

    static getAllStudents = async () => {
        try {
            const students = await User.findAll({where: {type_user: 'student'}});
            return {
                success: true,
                data: students
            }
        } catch (error) {
            console.error('Failed to retrieve student data: ', error);
            return {
                success: false,
                error: "An error occurred",
            };
        }
    }
}

module.exports = UserService