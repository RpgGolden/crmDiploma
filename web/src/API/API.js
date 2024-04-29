import axios from "axios";
const server = "http://localhost:3000";

//! Запрос на регистрацию
export const Register = async (UserData) => {
  try {
    const response = await axios.post(`${server}/auth/register`, UserData);
    const { accessToken, refreshToken, ...userData } = response.data;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('userDataID', userData.id);
    return userData;
  } catch (error) {
    alert("Регистрация не прошла!")
  }
};
//! Запрос на авторизацию
export const Login = async (UserData) => {
    try {
        const response = await axios.post(`${server}/auth/login`, UserData);
        const { accessToken, refreshToken, ...userData } = response.data;
         localStorage.setItem('accessToken', accessToken);
         localStorage.setItem('refreshToken', refreshToken);
         localStorage.setItem('userDataID', userData.id);
         return userData;
    } catch (error) {
        console.error('Login error:', error);
        alert("Пользователь не найден!")
    }
}

//! Получить список докторов
export const  GetAllDoctor = async (accessToken) => {
    try {
        const response = await axios.get(`${server}/doctor/getAll`,{
            headers:{
                Authorization: `${accessToken}`,
            },
        });
        return response;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

//! Записсь на прием
export const MakeApointmentApi = async (accessToken, data) => {
    console.log('data', data)
    console.log('accessToken', accessToken)

    try {
        const response = await axios.post(`${server}/appointment/create`, data, {
            headers: {
                Authorization: accessToken,
            }
        });
        return response;
    } catch (error) {
        console.error('Appointment creation error:', error);
        throw error;
    }
}

//!обновление данных пациента 
export const PatientUpdate = async (accessToken, data) => {
    try {
        const response = await axios.post(`${server}/patient/update`, data, {
            headers: {
                Authorization: accessToken,
            }
        });
        return response;
    } catch (error) {
        alert("Произошла ошибка при обновлении данных!")
    }
}

//!подтягивание данных пациента
export const PatientGetData = async (accessToken) => {
    try {
        const response = await axios.get(`${server}/patient/getAll`,{
            headers: {
                Authorization: accessToken,
            }
        });
        return response;
    } catch (error) {
        console.error('Appointment creation error:', error);
        throw error;
    }
}

// //!получение пациента
// export const PatientGetId = async (accessToken, data) => {
//     try {
//         const response = await axios.get(`${server}/getPatient`, data,{
//             headers: {
//                 Authorization: accessToken,
//             }
//         });
//         return response;
//     } catch (error) {
//         console.error('Appointment creation error:', error);
//         throw error;
//     }
// }
