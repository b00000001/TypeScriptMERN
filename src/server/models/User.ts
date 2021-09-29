import { Model, DataTypes } from 'sequelize';
const sequelize = require('../config/connection')

interface UserAttributes {
    id: number,
    name: string,
    email: string
}
class User extends Model<UserAttributes> {
    public id!: number;
    public name!: string;
    public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false
    }
  },
  {
    tableName: 'users',
    sequelize
  }
)
export = User
