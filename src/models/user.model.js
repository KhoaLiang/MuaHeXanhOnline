const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const accountTypes = {
    ADMIN: 'admin',
    LEADER: 'leader',
    STUDENT: 'student'
}

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    gmail: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type_user: {
        type: DataTypes.ENUM(accountTypes.ADMIN, accountTypes.LEADER, accountTypes.STUDENT),
        allowNull: false
    },
    mssv: {
        type: DataTypes.STRING,
        allowNull: false
    },
    school: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User