import User from '../models/user.js';
import Patient from '../models/patient.js';
import roles from '../config/roles.js';
import PatientDto from '../dtos/patient-profile-dto.js';
import { AppErrorMissing } from '../utils/errors.js';
import Appointment from '../models/appointment.js';
import { Sequelize } from 'sequelize';

export default {
    async getAll(req, res) {
        try {
            // Находим всех пациентов, у которых нет связанных пользователей
            const patientsWithoutUser = await Patient.findAll({
                where: {
                    userId: null,
                },
            });

            // Находим всех пациентов с ролью PATIENT из таблицы User
            const patientsWithUserRole = await Patient.findAll({
                include: {
                    model: User,
                    where: { role: roles.PATIENT },
                },
            });

            // Объединяем результаты двух запросов
            const allPatients = patientsWithoutUser.concat(patientsWithUserRole);

            const patientDto = allPatients.map(x => new PatientDto(x));
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

    async getDataPatient({ params: { patientId } }, res) {
        const patient = await Patient.findByPk(patientId);
        if (!patient) {
            throw new AppErrorMissing('Patient not found');
        }
        const patientDto = new PatientDto(patient);

        res.json(patientDto);
    },

    async deletePatient({ params: { patientId } }, res) {
        try {
            const patient = await Patient.findByPk(patientId);

            if (!patient) {
                throw new Error('Пациент не найден');
            }

            const { userId } = patient;

            // Удаление приемов, связанных с пациентом
            await Appointment.destroy({
                where: {
                    patientId: patient.id,
                },
                force: true,
            });

            // Удаление пользователя, если у пациента есть userId
            if (userId) {
                await User.destroy({
                    where: {
                        id: userId,
                    },
                    force: true,
                });
            }

            // Удаление пациента
            await patient.destroy({ force: true });

            res.send('Пациент и связанные приемы удалены');
        } catch (error) {
            console.error('Ошибка при удалении пациента:', error);
            res.status(500).send('Ошибка при удалении пациента');
        }
    },

    async createPatient(req, res) {
        const data = req.body;

        const { name, surname, patronymic, gender, passport, snils, birthDate, phoneNumber, oms, registration } = data;

        try {
            const patient = await Patient.create({
                name,
                surname,
                patronymic,
                gender,
                passport,
                snils,
                birthDate,
                phoneNumber,
                oms,
                registration,
                role: roles.PATIENT,
            });

            const patientDto = new PatientDto(patient);

            res.json(patientDto);
        } catch (error) {
            console.error('Ошибка при создании пациента:', error);
        }
    },

    async updatePatient(
        {
            params: { patientId },
            body: { name, surname, patronymic, gender, passport, snils, birthDate, phoneNumber, oms, registration },
        },
        res
    ) {
        const patient = await Patient.findByPk(patientId);
        if (!patient) {
            throw new AppErrorMissing('Patient not found');
        }
        if (!name) name = patient.name;
        if (!surname) surname = patient.surname;
        if (!patronymic) patronymic = patient.patronymic;
        if (!gender) gender = patient.gender;
        if (!passport) passport = patient.passport;
        if (!snils) snils = patient.snils;
        if (!birthDate) birthDate = patient.birthDate;
        if (!phoneNumber) phoneNumber = patient.phoneNumber;
        if (!oms) oms = patient.oms;
        if (!registration) registration = patient.registration;
        try {
            await patient.update({
                name,
                surname,
                patronymic,
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
        } catch (error) {
            console.error('Ошибка при обновлении пациента:', error);
        }
    },
};
