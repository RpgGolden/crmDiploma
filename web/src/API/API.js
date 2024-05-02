import axios from "axios";
const server = "http://localhost:3000";

//! Запрос на регистрацию
export const Register = async (UserData) => {
  try {
    const response = await axios.post(`${server}/auth/register`, UserData);
    const { accessToken, refreshToken, ...userData } = response.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("userData", JSON.stringify(userData));

    return userData;
  } catch (error) {
    alert("Регистрация не прошла!");
  }
};
//! Запрос на авторизацию
export const Login = async (UserData) => {
  try {
    const response = await axios.post(`${server}/auth/login`, UserData);
    const { accessToken, refreshToken, ...userData } = response.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("userData", JSON.stringify(userData));

    return userData;
  } catch (error) {
    console.error("Login error:", error);
    alert("Пользователь не найден!");
  }
};

//! Получить список докторов
export const GetAllDoctor = async (accessToken) => {
  try {
    const response = await axios.get(`${server}/doctor/getAll`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

//! Записсь на прием
export const MakeApointmentApi = async (accessToken, data) => {
  try {
    const response = await axios.post(`${server}/appointment/create`, data, {
      headers: {
        Authorization: accessToken,
      },
    });
    return response;
  } catch (error) {
    console.error("Appointment creation error:", error);
    throw error;
  }
};

//!обновление данных пациента
export const PatientUpdate = async (accessToken, data) => {
  try {
    const response = await axios.post(`${server}/patient/update`, data, {
      headers: {
        Authorization: accessToken,
      },
    });
    return response;
  } catch (error) {
    alert("Произошла ошибка при обновлении данных!");
  }
};

//!подтягивание данных пациента
export const PatientGetData = async (accessToken) => {
  try {
    const response = await axios.get(`${server}/patient/getAll`, {
      headers: {
        Authorization: accessToken,
      },
    });
    return response;
  } catch (error) {
    console.error("Appointment creation error:", error);
    throw error;
  }
};

// //!получение всех записей пациента
export const GetAllApointment = async (accessToken) => {
  try {
    const response = await axios.get(`${server}/appointment/getAll`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

//! удаление записи на прием
export const DeleteApointment = async (accessToken, id) => {
  try {
    const response = await axios.delete(
      `${server}/appointment/deleteAppointment/${id}`,
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Appointment creation error:", error);
    throw error;
  }
};

//! получение данных пациентов для таблицы
export const GetAllUsers = async (accessToken) => {
  try {
    const response = await axios.get(`${server}/patient/getAll`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

//! получение данных 1 пациента по токену
export const GetUsersData = async (accessToken) => {
  try {
    const response = await axios.get(`${server}/patient/getPatient`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

//! запрос на регистрацию пациента
export const CreatePatient = async (accessToken, data) => {
  try {
    const response = await axios.post(`${server}/patient/createPatient`, data, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};


//! получение данных 1 пациента по Id
export const GetPatientId = async (accessToken, id) => {
  try {
    const response = await axios.get(`${server}/patient/getDataPatient/${id}`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

//! Обновление данных пациента по Id
export const UpdateDataPatientForId = async (accessToken, data, id) => {
  try {
    const response = await axios.post(`${server}/patient/updatePatient/${id}`, data,{
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

//! Получение Id Пациента
export const GetAllPatientAppoint = async (accessToken, id) => {
  try {
    const response = await axios.get(`${server}/appointment/GetAllPatientAppointments/${id}`,{
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};


// //! Получение историй посищений клиента 
// export const GetAllPatientAppoint = async (accessToken, id) => {
//   try {
//     const response = await axios.get(`${server}/appointment/GetAllPatientAppointments/${id}`,{
//       headers: {
//         Authorization: `${accessToken}`,
//       },
//     });
//     return response;
//   } catch (error) {
//     console.error("Login error:", error);
//     throw error;
//   }
// };