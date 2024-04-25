import { DataTypes, Model } from 'sequelize';

export default class Doctor extends Model {
    static initialize(sequelize) {
        Doctor.init(
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
                specialist: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },

            {
                sequelize,
                schema: 'public',
                modelName: 'Doctor',
                tableName: 'doctors',
                paranoid: true,
            }
        );
    }
}
