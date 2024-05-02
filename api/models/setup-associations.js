import { models } from './index.js';

const { User, TokenSchema, Patient, Doctor, Appointment } = models;

export default function () {
    User.hasOne(TokenSchema, { foreignKey: 'userId' });
    TokenSchema.belongsTo(User, { foreignKey: 'userId' });

    User.hasOne(Patient, { onDelete: 'CASCADE' });
    Patient.belongsTo(User, { onDelete: 'CASCADE' });

    Patient.hasMany(Appointment);
    Appointment.belongsTo(Patient, { onDelete: 'cascade' });

    User.hasMany(Appointment, { foreignKey: 'userId' });
    Appointment.belongsTo(User, { foreignKey: 'userId' });

    Doctor.hasMany(Appointment, { foreignKey: 'doctorId' });
    Appointment.belongsTo(Doctor, { foreignKey: 'doctorId' });

    // Doctor.hasOne(Patient, { foreignKey: 'doctorId' });
    // Patient.belongsTo(Doctor, { foreignKey: 'doctorId' });
}
