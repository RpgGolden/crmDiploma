import Appointment from '../models/appointment.js';
import Doctor from '../models/doctor.js';
import { AppErrorAlreadyExists, AppErrorMissing } from '../utils/errors.js';
import AppointmentDto from '../dtos/appointment-dto.js';
import Patient from '../models/patient.js';

export default {
    async getAll(req, res) {
        const userId = req.user.id;

        // Найти пациента по userId
        const patient = await Patient.findOne({ where: { userId } });
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }

        // Найти все записи на прием для найденного пациента
        const appointments = await Appointment.findAll({
            where: { patientId: patient.id },
            include: [
                { model: Doctor },
                Patient, // Необязательно, так как мы уже знаем пациента
            ],
        });

        // Создать объекты DTO для всех записей на прием
        const appointmentsDto = appointments.map(x => new AppointmentDto(x));

        // Отправить ответ с массивом DTO записей на прием
        res.json(appointmentsDto);
    },

    async createAppointment(req, res) {
        const user = req.user.id;
        const data = req.body;

        const { doctorId, date, time } = data;

        const doctor = await Doctor.findOne({ where: { id: data.doctorId } });
        if (!doctor) {
            throw new AppErrorMissing('Doctor not found');
        }
        const patient = await Patient.findOne({ where: { userId: user } });

        const existingAppointment = await Appointment.findOne({
            where: {
                doctorId,
                date,
                time,
            },
        });
        if (existingAppointment) {
            throw new AppErrorAlreadyExists('Appointment already exists');
        }

        const appointment = await Appointment.create({
            doctorId,
            patientId: patient.id,
            date,
            time,
        });

        await appointment.reload({ include: [Patient, Doctor] });

        const appointmentDto = new AppointmentDto(appointment);

        res.json(appointmentDto);
    },

    async deleteAppointment({ params: { id } }, res) {
        const appointment = await Appointment.findOne({ where: { id } });

        if (!appointment) {
            throw new AppErrorMissing('Appointment not found');
        }

        await appointment.destroy({ force: true });

        res.send('Appointment deleted');
    },
};
