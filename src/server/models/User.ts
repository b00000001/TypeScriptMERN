import { Sequelize, Model } from 'sequelize';
const sequelize = require('../config/connection')

class User extends Model {
    User.init(
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isAlphanumeric: true,
            }
            sequelize
        },
        )

}

export = User;