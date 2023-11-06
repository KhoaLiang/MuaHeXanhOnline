const { DataTypes } = require("sequelize")
const sequelize = require("../database/index")

const Application = sequelize.define('application', {
    apply_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    time: {
        type: DataTypes.DATE
    }
})

module.exports = Application
