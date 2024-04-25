import { map as statusAppointmentMap } from '../config/appointment-status.js';
import { map as appointmentTimeMap } from '../config/appointment-time.js';
import PatientDto from './patient-profile-dto.js';
import DoctorDto from './doctor-dto.js';

export default class AppointmentDto {
    id;
    patient;
    doctor;
    date;
    time;
    status;

    constructor(model) {
        this.id = model.id;
        this.patient = model.Patient ? new PatientDto(model.Patient) : null;
        this.doctor = model.Doctor ? new DoctorDto(model.Doctor) : null;
        this.date = model.date;
        this.time = appointmentTimeMap[model.time];
        this.status = statusAppointmentMap[model.status];
    }
}
