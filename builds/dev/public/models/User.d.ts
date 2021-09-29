import { Model } from 'sequelize';
interface UserAttributes {
    id: number;
    name: string;
    email: string;
}
declare class User extends Model<UserAttributes> {
    id: number;
    name: string;
    email: string;
}
export = User;
