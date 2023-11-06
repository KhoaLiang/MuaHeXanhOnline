const { DataTypes } = require("sequelize")
const sequelize = require("../database/index")

const Students = sequelize.define('student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    school: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Students
