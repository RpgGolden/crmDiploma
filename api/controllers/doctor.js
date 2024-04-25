import Doctor from '../models/doctor.js';
import DoctorDto from '../dtos/doctor-dto.js';
import Appointment from '../models/appointment.js';
import Patient from '../models/patient.js';
export default {
    async getAll(req, res) {
        const doctor = await Doctor.findAll({
            include: {
                model: Appointment,
                include: [
                    {
                        model: Patient,
                    },
                ],
            },
        });
        const doctorDto = doctor.map(x => new DoctorDto(x));
        res.json(doctorDto);
    },
};
