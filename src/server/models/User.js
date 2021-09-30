"use strict";
const sequelize_1 = require("sequelize");
const sequelize = require('../config/connection');
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    }
}, {
    tableName: 'users',
    sequelize
});
module.exports = User;
