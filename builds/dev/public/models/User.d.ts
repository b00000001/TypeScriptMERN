import { Model } from 'sequelize';
interface UserAttributes {
    name: string;
    email: string;
}
declare class User extends Model<UserAttributes> {
    name: string;
    email: string;
}
export = User;
