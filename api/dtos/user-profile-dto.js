export default class UserProfileDto {
    id;
    name;
    surname;
    constructor(model) {
        this.id = model.id;
        this.name = model.name;
        this.surname = model.surname;
        this.patronymic = model.patronymic;
    }
}
