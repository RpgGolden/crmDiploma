import { DataTypes, Model } from 'sequelize';
import EnumRoles from '../config/roles.js';

export default class User extends Model {
    static initialize(sequelize) {
        User.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                surname: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                patronymic: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                login: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        isEmail: { msg: 'Must be an email address.' },
                    },
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                        len: [6, 100],
                        notEmpty: true,
                        notNull: true,
                        notContains: ' ',
                    },
                },
                role: {
                    type: DataTypes.SMALLINT,
                    allowNull: false,
                    validate: {
                        isIn: [Object.values(EnumRoles)],
                    },
                    defaultValue: EnumRoles.PATIENT,
                },
            },
            {
                sequelize,
                schema: 'public',
                modelName: 'User',
                tableName: 'users',
                paranoid: true,
            }
        );
    }
}
