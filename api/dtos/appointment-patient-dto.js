import { map as statusAppointmentMap } from '../config/appointment-status.js';
import { map as appointmentTimeMap } from '../config/appointment-time.js';
import PatientDto from './patient-profile-dto.js';
import DoctorProfileDto from './doctor-profile-dto.js';

export default class AppointmentDto {
    id;
    user;
    doctor;
    date;
    time;
    status;

    constructor(model) {
        this.id = model.id;
        this.patient = model.Patient ? new PatientDto(model.Patient) : null;
        this.doctor = model.Doctor ? new DoctorProfileDto(model.Doctor) : null;
        this.date = model.date;
        this.time = appointmentTimeMap[model.time];
        this.status = statusAppointmentMap[model.status];
    }
}
