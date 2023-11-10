const { DataTypes } = require("sequelize")
const sequelize = require('../database/index.js')

const Project = sequelize.define('project', {
    project_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    current_number: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    number_of_students: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // isVerified: {
    //     type: DataTypes.BOOLEAN
    // },
    school: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Project;
