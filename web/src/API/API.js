import axios from "axios";
const server = "http://localhost:3000";

//! Запрос на регистрацию
export const Register = async (UserData) => {
  try {
    const response = await axios.post(`${server}/auth/register`, UserData);
    const { accessToken, refreshToken, ...registeredUserData } = response.data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('userData', JSON.stringify(registeredUserData));

    return registeredUserData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
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
        // throw error;
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
