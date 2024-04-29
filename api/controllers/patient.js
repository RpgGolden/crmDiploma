import User from '../models/user.js';
import Patient from '../models/patient.js';
import roles from '../config/roles.js';
import PatientDto from '../dtos/patient-profile-dto.js';
import { AppErrorMissing } from '../utils/errors.js';
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

            const patientDto = patients.map(x => new PatientDto(x));
            res.json(patientDto);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    async updateProfile(req, res) {
        const user = req.user.id;

        const data = req.body;

        const { gender, passport, snils, birthDate, phoneNumber, oms, registration } = data;

        const patient = await Patient.findOne({ where: { userId: user } });
        if (!patient) {
            throw new AppErrorMissing('Patient not found');
        }
        await patient.update({
            gender,
            passport,
            snils,
            birthDate,
            phoneNumber,
            oms,
            registration,
        });

        const patientDto = new PatientDto(patient);

        res.json(patientDto);
    },
    async getPatient(req, res) {
        const user = req.user.id;

        const patient = await Patient.findOne({ where: { userId: user } });
        if (!patient) {
            throw new AppErrorMissing('Patient not found');
        }

        const patientDto = new PatientDto(patient);

        res.json(patientDto);
    },
};
