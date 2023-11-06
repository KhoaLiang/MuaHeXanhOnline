const { DataTypes } = require("sequelize")
const sequelize = require("../database/index")
const Verify = require("./verify.model")

const Leaders = sequelize.define('leader', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    leader_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Leaders
