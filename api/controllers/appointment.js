import Appointment from '../models/appointment.js';
import Doctor from '../models/doctor.js';
import { AppErrorAlreadyExists, AppErrorMissing } from '../utils/errors.js';
import AppointmentDto from '../dtos/appointment-dto.js';
import Patient from '../models/patient.js';
import User from '../models/user.js';

export default {
    async getAll(req, res) {
        const userId = req.user.id;

        // Найти все записи на прием для найденного пациента
        const appointments = await Appointment.findAll({
            where: { userId: userId },
            include: [{ model: Doctor }, User],
        });

        // Создать объекты DTO для всех записей на прием
        const appointmentsDto = appointments.map(x => new AppointmentDto(x));

        // Отправить ответ с массивом DTO записей на прием
        res.json(appointmentsDto);
    },

    async createAppointment(req, res) {
        const userId = req.user.id;
        const data = req.body;

        const { doctorId, date, time } = data;

        const doctor = await Doctor.findOne({ where: { id: data.doctorId } });
        if (!doctor) {
            throw new AppErrorMissing('Doctor not found');
        }
        const user = await User.findByPk(userId, { include: Patient });
        if (!user) {
            throw new AppErrorMissing('User not found');
        }
        const patient = await Patient.findOne({ where: { userId: userId } });
        // const patient = await Patient.findOne({ where: { userId: user } });
        console.log(patient);
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
            // patientId: patient.id,
            userId: userId,
            date,
            time,
        });

        await appointment.reload({ include: [Doctor, User] });

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
