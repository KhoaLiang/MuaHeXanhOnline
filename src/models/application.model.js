const { DataTypes } = require("sequelize")
const sequelize = require("../database/index")

const Application = sequelize.define('application', {
    apply_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    mssv_student: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    time: {
        type: DataTypes.DATE
    }
})

module.exports = Application