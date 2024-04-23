import User from '../models/user.js';
import Patient from '../models/patient.js';
import roles from '../config/roles.js';
export default {
    async getAll(req, res) {
        try {
            // Находим всех пациентов с ролью "patient"
            const patients = await Patient.findAll({
                include: {
                    model: User,
                    where: { role: roles.PATIENT }, // Фильтруем по роли "patient"
                },
            });

            res.json(patients);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    async updateProfile(req, res) {},
};
