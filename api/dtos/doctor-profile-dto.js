export default class DoctorProfileDto {
    id;
    name;
    surname;
    patronymic;
    specialist;

    constructor(model) {
        this.id = model.id;
        this.name = model.name;
        this.surname = model.surname;
        this.patronymic = model.patronymic;
        this.specialist = model.specialist;
    }
}
