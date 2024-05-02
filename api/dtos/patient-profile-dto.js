import { map as genderMap } from '../config/gender.js';

export default class PatientDto {
    id;
    name;
    surname;
    patronymic;
    gender;
    passport;
    snils;
    birthDate;
    phoneNumber;
    oms;
    registration;
    constructor(model) {
        this.id = model.id;
        this.name = model.name;
        this.surname = model.surname;
        this.patronymic = model.patronymic;
        this.gender = model.gender;
        this.passport = model.passport;
        this.snils = model.snils;
        this.birthDate = model.birthDate;
        this.phoneNumber = model.phoneNumber;
        this.oms = model.oms;
        this.registration = model.registration;
    }
}
