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

        // Сохранение токенов и информации о пользователе в localStorage
         localStorage.setItem('accessToken', accessToken);
         localStorage.setItem('refreshToken', refreshToken);
         localStorage.setItem('userData', JSON.stringify(userData));

        return userData;
    } catch (error) {
        // Обработка ошибок, например, вывод сообщения об ошибке на экран
        console.error('Login error:', error);
        throw error;
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
        // Обработка ошибок, например, вывод сообщения об ошибке на экран
        console.error('Login error:', error);
        throw error;
    }
}