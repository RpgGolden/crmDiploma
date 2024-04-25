import { mapObjectKeys } from '../utils/map.js';

const statusAppointment = {
    Создана: 1,
    Завершена: 2,
    Отменена: 3,
};

export default statusAppointment;

export const map = mapObjectKeys(statusAppointment);
