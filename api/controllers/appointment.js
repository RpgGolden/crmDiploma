import Appointment from '../models/appointment.js';
import Doctor from '../models/doctor.js';
import { AppErrorAlreadyExists, AppErrorMissing } from '../utils/errors.js';
import AppointmentDto from '../dtos/appointment-dto.js';
import Patient from '../models/patient.js';

export default {
    async getAll(req, res) {
        const appointments = await Appointment.findAll({
            include: [
                {
                    model: Doctor,
                    attributes: { exclude: ['appointments'] }, // Exclude the 'appointments' attribute
                },
                Patient,
            ],
        });
        const appointmentsDto = appointments.map(x => new AppointmentDto(x));
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

        const appointmentDto = new AppointmentDto(appointment);

        res.json(appointmentDto);
    },

    async deleteAppointment({ params: { id } }, req, res) {
        // Удалить Appointment по айди

        const appointment = await Appointment.findOne({ where: { id } });

        if (!appointment) {
            throw new AppErrorMissing('Appointment not found');
        }

        await appointment.destroy({ force: true });
    },
};
