const { DataTypes } = require("sequelize")
const sequelize = require("../database/index")

const Verify = sequelize.define('verify', {
    verify_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    time: {
        type: DataTypes.DATE
    }
})

module.exports = Verify
