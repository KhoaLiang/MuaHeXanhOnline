'use strict'

const User = require('../models/user.model')

const findUserByUsername = async (username) => {
    return await User.findOne({where: {username}})
}

class UserService {
    static getAll = async () => {
        return await User.findAll()
    }
}
module.exports = {
    findUserByUsername
}