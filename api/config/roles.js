import { mapObjectKeys } from '../utils/map.js';

const roles = {
    REGISTRATOR: 1,
    PATIENT: 2,
    ADMINISTRATOR: 3,
};

export default roles;

export const map = mapObjectKeys(roles);
