import { DataTypes, Model } from 'sequelize';
import EnumGender from '../config/gender.js';
export default class Patient extends Model {
    static initialize(sequelize) {
        Patient.init(
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
                gender: {
                    type: DataTypes.SMALLINT,
                    allowNull: true,
                    validate: {
                        isIn: [Object.values(EnumGender)],
                    },
                    defaultValue: EnumGender.NONE,
                },
                passport: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    // validate: {
                    //     is: /^\d{10}$/,
                    // },
                },
                snils: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    // validate: {
                    //     is: /^\d{3}-\d{3}-\d{3}\s\d{2}$/,
                    // },
                },
                birthDate: {
                    type: DataTypes.DATEONLY,
                    allowNull: true,
                },
                phoneNumber: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    // validate: {
                    //     is: /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/,
                    // },
                },
                oms: {
                    type: DataTypes.STRING,
                    allowNull: true,
                    // validate: {
                    //     is: /^\d{16}$/,
                    // },
                },
                registration: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                userId: {
                    type: DataTypes.UUID,
                    allowNull: true,
                },
                patientId: {
                    type: DataTypes.UUID,
                    allowNull: true,
                },
            },
            {
                sequelize,
                schema: 'public',
                modelName: 'Patient',
                tableName: 'patients',
                paranoid: true,
            }
        );
    }
}
