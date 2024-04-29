import Doctor from '../models/doctor.js';
import Appointment from '../models/appointment.js';
import User from '../models/user.js';
import DoctorProfileDto from '../dtos/doctor-profile-dto.js';
export default {
    async getAll(req, res) {
        const doctor = await Doctor.findAll({
            include: {
                model: Appointment,
                include: [
                    {
                        model: User,
                    },
                ],
            },
        });
        const doctorDto = doctor.map(x => new DoctorProfileDto(x));
        res.json(doctorDto);
    },
};
