import { mapObjectKeys } from '../utils/map.js';

const appointmentTime = {
    '8:00': 1,
    '9:30': 2,
    '11:00': 3,
    '12:30': 4,
    '14:00': 5,
    '15:30': 6,
    '17:00': 7,
    '18:30': 8,
};

export default appointmentTime;

export const map = mapObjectKeys(appointmentTime);
