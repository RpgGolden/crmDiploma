import Appointment from '../models/appointment.js';
import Doctor from '../models/doctor.js';
import { AppErrorAlreadyExists, AppErrorMissing } from '../utils/errors.js';
import AppointmentDto from '../dtos/appointment-dto.js';
import Patient from '../models/patient.js';
import User from '../models/user.js';
import AppointmentPatientDto from '../dtos/appointment-patient-dto.js';

export default {
    async getAll(req, res) {
        try {
            const userId = req.user.id;

            const patient = await Patient.findOne({ where: { userId } });
            if (!patient) {
                throw new AppErrorMissing('Patient not found');
            }

            const appointments = await Appointment.findAll({
                where: { patientId: patient.id },
                include: [Doctor, User],
            });

            if (!appointments) {
                throw new AppErrorMissing('Appointments not found');
            }
            const appointmentDto = appointments.map(x => new AppointmentDto(x));
            // Отправить ответ с массивом DTO всех записей на прием
            res.json(appointmentDto);
        } catch (error) {
            console.error('Error fetching appointments:', error);
            res.status(500).json({ error: error.message });
        }
    },

    async createAppointment(req, res) {
        const userId = req.user.id;

        const data = req.body;
        const { doctorId, date, time } = data;

        const doctor = await Doctor.findOne({ where: { id: data.doctorId } });
        if (!doctor) {
            throw new AppErrorMissing('Doctor not found');
        }
        const user = await User.findByPk(userId);
        if (!user) {
            throw new AppErrorMissing('User not found');
        }
        const patient = await Patient.findOne({ where: { userId } });
        if (!patient) {
            throw new AppErrorMissing('Patient not found');
        }
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
            userId,
            patientId: patient.id,
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
    async getAllPatientAppointments({ params: { patientId } }, res) {
        const patient = await Patient.findOne({ where: { id: patientId } });
        if (!patient) {
            throw new AppErrorMissing('Patient not found');
        }

        const appointment = await Appointment.findAll({ where: { patientId: patientId }, include: [Doctor, User] });

        if (!appointment) {
            throw new AppErrorMissing('Appointment not found');
        }

        const appointmentPatientDto = appointment.map(x => new AppointmentPatientDto(x));

        res.json(appointmentPatientDto);
    },

    async createAppointmentByRegistrator(req, res) {
        const data = req.body;

        const userId = req.user.id;

        const { doctorId, date, time, patientId } = data;

        const user = await User.findByPk(userId);
        if (!user) {
            throw new AppErrorMissing('User not found');
        }
        const patient = await Patient.findOne({ where: { id: patientId } });
        if (!patient) {
            throw new AppErrorMissing('Patient not found');
        }
        const doctor = await Doctor.findOne({ where: { id: data.doctorId } });
        if (!doctor) {
            throw new AppErrorMissing('Doctor not found');
        }
        const existingAppointment = await Appointment.findOne({
            where: {
                doctorId,
                date,
                time,
                patientId,
            },
        });
        if (existingAppointment) {
            throw new AppErrorAlreadyExists('Appointment already exists');
        }
        try {
            const appointment = await Appointment.create({
                doctorId,
                userId,
                patientId: patient.id,
                date,
                time,
            });

            await appointment.reload({ include: [Doctor, Patient] });
            const appointmentPatientDto = new AppointmentPatientDto(appointment);

            res.json(appointmentPatientDto);
        } catch (error) {
            console.error(error);
        }
    },
};
