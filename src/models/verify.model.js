const { DataTypes } = require("sequelize")
const sequelize = require("../database/index");
const Project = require("./project.model");
const User = require("./user.model");

const Verify = sequelize.define('verify', {
    verify_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    time: {
        type: DataTypes.DATE
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User', 
            key: 'id', 
        },
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Project', 
            key: 'project_id', 
        },
    },
})

ForeignModel.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });
ForeignModel.belongsTo(Project, { foreignKey: 'projectId', targetKey: 'project_id' });

module.exports = Verify