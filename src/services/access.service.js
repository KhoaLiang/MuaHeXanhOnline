'use strict'

const User = require("../models/user.model")
const Token = require("../models/token.model")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const { BadRequestError, AuthFailureError } = require("../core/error.response")

class AccessService {
    static register = async ({username, password, gmail, mssv, school}) => {
        const alreadyExistUser = await User.findOne({ where: {username} }).catch(
            (err) => {
                console.log("Error: ", err)
            }
        )
        if (alreadyExistUser) {
            throw new BadRequestError('Error: Username already exists');
        }
        if (password.length < 6) {
            throw new BadRequestError('Error: Password is weak')
        }

        const hassedpassword = await bcrypt.hash(password, 10)

        if (!mssv) {
            throw new BadRequestError("MSSV isn't empty")
        }

        if (!school) {
            throw new BadRequestError("University isn't empty")
        }

        const newUser = new User({username, password: hassedpassword, gmail, mssv, school, type_user: 'student'});

        const savedUser = await newUser.save().catch((error) => {
            console.log("Error: ", error)
            throw new BadRequestError('Error: Cannot register user at the moment')
        })
        if (savedUser) {
            return {
                code: 201,
                metadata: {
                    // user: getInfoData({fields: ['user_id', 'username'], object: savedUser})
                    user_info: savedUser
                }
            }
        }
        return {
            code: 200,
            metadata: null
        }
    }

    static login = async ({username, password, refreshToken = null}) => {
        const foundUser = await User.findOne({ where: {username} }).catch(
            (err) => {
                console.log("Error: ", err)
            }
        )
        if (!foundUser) {
            throw new BadRequestError("Username doesn't exist!")
        }

        const match = bcrypt.compare(password, foundUser.password)
        if (!match) throw new AuthFailureError('Authentication error!')

        const jwtToken = jwt.sign(
                {mssv: foundUser.mssv, id: foundUser.id},
                process.env.JWT_SECRET
        )

        return {
            code : 200,
            token: jwtToken
        }
    }

    static logout = async ({}) => {

    }
}

module.exports = AccessService