import { DataTypes, Model } from 'sequelize';

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
                },
                passport: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                snils: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                birthDate: {
                    type: DataTypes.DATEONLY,
                    allowNull: true,
                },
                phoneNumber: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                oms: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                registration: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                userId: {
                    type: DataTypes.UUID,
                    allowNull: false,
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
