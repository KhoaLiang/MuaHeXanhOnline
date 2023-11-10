const { DataTypes } = require("sequelize")
const sequelize = require("../database/index")
const { User } = require("./user.model")

const Students = sequelize.define('student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mssv: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    school: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Students
