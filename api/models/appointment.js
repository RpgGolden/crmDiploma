import { DataTypes, Model } from 'sequelize';
import EnumStatus from '../config/appointment-status.js';
import appointmentTime from '../config/appointment-time.js';

export default class Appointment extends Model {
    static initialize(sequelize) {
        Appointment.init(
            {
                id: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    allowNull: false,
                    primaryKey: true,
                },
                userId: {
                    type: DataTypes.UUID,
                    allowNull: false,
                },
                patientId: {
                    type: DataTypes.UUID,
                    allowNull: true,
                },
                doctorId: {
                    type: DataTypes.UUID,
                    allowNull: false,
                },
                date: {
                    type: DataTypes.DATEONLY,
                    allowNull: false,
                },
                time: {
                    type: DataTypes.SMALLINT,
                    allowNull: false,
                    validate: {
                        isIn: [Object.values(appointmentTime)],
                    },
                },
                status: {
                    type: DataTypes.SMALLINT,
                    allowNull: false,
                    validate: {
                        isIn: [Object.values(EnumStatus)],
                    },
                    defaultValue: EnumStatus.Создана,
                },
            },

            {
                sequelize,
                schema: 'public',
                modelName: 'Appointment',
                tableName: 'appointments',
                paranoid: true,
            }
        );
    }
}
