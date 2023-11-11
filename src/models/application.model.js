const { DataTypes } = require("sequelize")
const sequelize = require("../database/index")

const Application = sequelize.define('application', {
    apply_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    time: {
        type: DataTypes.DATE
    }
})

module.exports = Application
