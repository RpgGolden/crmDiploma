import { mapObjectKeys } from '../utils/map.js';

const gender = {
    МУЖ: 1,
    ЖЕН: 2,
    НЕТ: 3,
};

export default gender;

export const map = mapObjectKeys(gender);
