import { models } from './index.js';

const { User, TokenSchema, Patient, Doctor, Appointment } = models;

export default function () {
    User.hasOne(TokenSchema, { foreignKey: 'userId' });
    TokenSchema.belongsTo(User, { foreignKey: 'userId' });

    User.hasOne(Patient, { foreignKey: 'userId' });
    Patient.belongsTo(User, { foreignKey: 'userId' });

    // Patient.hasMany(Appointment, { foreignKey: 'patientId' });
    // Appointment.belongsTo(Patient, { foreignKey: 'patientId' });

    User.hasMany(Appointment, { foreignKey: 'userId' });
    Appointment.belongsTo(User, { foreignKey: 'userId' });

    Doctor.hasMany(Appointment, { foreignKey: 'doctorId' });
    Appointment.belongsTo(Doctor, { foreignKey: 'doctorId' });

    // Doctor.hasOne(Patient, { foreignKey: 'doctorId' });
    // Patient.belongsTo(Doctor, { foreignKey: 'doctorId' });
}
