'use strict'
const User = require("../models/user.model")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const { BadRequestError, AuthFailureError } = require("../core/error.response")
const { getInfoData } = require("../utils")
const { findUserByUsername } = require("./user.service")

class AccessService {
    static register = async ({username, password, gmail, mssv, university}) => {
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

        if (!university) {
            throw new BadRequestError("University isn't empty")
        }

        const newUser = new User({username, password: hassedpassword, gmail, mssv, university});

        const savedUser = await newUser.save().catch((error) => {
            console.log("Error: ", error)
            throw new BadRequestError('Error: Cannot register user at the moment')
        })
        if (savedUser) {
            return {
                code: 201,
                metadata: {
                    user: getInfoData({fields: ['user_id', 'username'], object: savedUser})
                }
            }
        }
        return {
            code: 200,
            metadata: null
        }
    }

    static login = async ({username, password, refreshToken = null}) => {
        const foundUser = await findUserByUsername(username) 
        if (!foundUser) {
            throw new BadRequestError("Username doesn't exist!")
        }

        const match = bcrypt.compare(password, foundUser.password)
        if (!match) throw new AuthFailureError('Authentication error!')

       const jwtToken = jwt.sign(
            {use_id: foundUser.use_id, username: foundUser.username},
            process.env.JWT_SECRET
       )
       return {
            code : 200,
            token: jwtToken
       }
    }

    // static logout = async (keyStore) => {
    //     const delKey = await KeyTokenService.deleteKeyById(keyStore.user_id)
    //     return delKey
    // }
}

module.exports = AccessService