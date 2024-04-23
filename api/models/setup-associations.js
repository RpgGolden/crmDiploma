import { models } from './index.js';

const { User, TokenSchema, Patient } = models;

export default function () {
    User.hasOne(TokenSchema, { foreignKey: 'userId' });
    TokenSchema.belongsTo(User, { foreignKey: 'userId' });

    User.hasOne(Patient, { foreignKey: 'userId' });
    Patient.belongsTo(User, { foreignKey: 'userId' });
}
