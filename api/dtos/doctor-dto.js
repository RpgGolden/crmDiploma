import AppointmentDto from './appointment-dto.js';

export default class DoctorDto {
    id;
    name;
    surname;
    patronymic;
    specialist;
    appointments;

    constructor(model) {
        this.id = model.id;
        this.name = model.name;
        this.surname = model.surname;
        this.patronymic = model.patronymic;
        this.specialist = model.specialist;
        this.appointments = Array.isArray(model.Appointments)
            ? model.Appointments.map(appointment => new AppointmentDto(appointment))
            : [];
    }
}
