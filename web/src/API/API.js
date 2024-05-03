import axios from "axios";
const server = "http://localhost:3000";

const REFRESH_INTERVAL = 1500000; // 25 минут
let refreshTokensTimeout;

export const refreshTokens = async (accessToken, refreshToken) => {
  try {
    const response = await axios.post(
      `${server}/auth/refresh`,
      { refreshToken },
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
      response.data;
    localStorage.setItem("accessToken", newAccessToken);
    localStorage.setItem("refreshToken", newRefreshToken);
  } catch (error) {
    console.error("Тоекны не обновлены!");
  }
};

const refreshTokensTimer = () => {
  clearTimeout(refreshTokensTimeout);
  if (localStorage.getItem("accessToken") === "null") {
    return;
  }
  const lastRefreshTime = localStorage.getItem("lastRefreshTime");
  const currentTime = Date.now();
  let timeRemaining;
  if (lastRefreshTime) {
    const nextRefreshTime = parseInt(lastRefreshTime) + REFRESH_INTERVAL;
    timeRemaining = Math.max(0, nextRefreshTime - currentTime);
  } else {
    timeRemaining = 0;
  }
  refreshTokensTimeout = setTimeout(() => {
    refreshTokens(
      localStorage.getItem("accessToken"),
      localStorage.getItem("refreshToken")
    );
    localStorage.setItem("lastRefreshTime", Date.now());
    refreshTokensTimer();
  }, timeRemaining);

  localStorage.setItem("refreshTokensInterval", refreshTokensTimeout);
};

window.addEventListener("load", () => {
  refreshTokensTimer();
});

window.addEventListener("unload", () => {
  clearTimeout(refreshTokensTimeout);
});

//! Запрос на регистрацию
export const Register = async (UserData) => {
  try {
    const response = await axios.post(`${server}/auth/register`, UserData);
    const { accessToken, refreshToken, ...userData } = response.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("userData", JSON.stringify(userData));
    refreshTokensTimer();
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
    refreshTokensTimer();
    return userData;
  } catch (error) {
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
    alert("При получения списка докторов произошла ошибка!");
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
    alert("Извините, но на такое время уже зарегистрирована заявка!");
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
    alert("Произошла ошибка при получении данных пациента!");
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
    console.log(response);
    return response;
  } catch (error) {
    alert("Произошла ошибка при получении записей пациента!");

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
    alert("Произошла ошибка при удалении записи пациента!");

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
    alert("Произошла ошибка при получении данных о пациента!");

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
    alert("Произошла ошибка при получении данных пациента!");
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
    alert("Произошла ошибка при регистрации пациента!");

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
    alert("Произошла ошибка при получении данных о пациенте!");
  }
};

//! Обновление данных пациента по Id
export const UpdateDataPatientForId = async (accessToken, data, id) => {
  try {
    const response = await axios.post(
      `${server}/patient/updatePatient/${id}`,
      data,
      {
        headers: {
          Authorization: `${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    alert("Произошла ошибка при обновлении данных пациента!");
  }
};


//! получение истории записей регестратором о пациенте
export const GetAllPatientAppoint = async (accessToken, id) => {
  try {
    const response = await axios.get(
      `${server}/appointment/GetAllPatientAppointments/${id}`,
      {
        headers: {
          Authorization: `${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    alert("Произошла ошибка при получении истории записей пациента!");
  }
};

//! Получение историй посищений клиента
export const CreateAppointReg = async (accessToken, data) => {
  try {
    const response = await axios.post(
      `${server}/appointment/createByRegister`,
      data,
      {
        headers: {
          Authorization: `${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    alert("Произошла ошибка при получении истории записей пациента!");
  }
};

//! удаление пациента
export const deleteAppointment = async (accessToken, id) => {
  console.log("id", id);
  try {
    const response = await axios.delete(
      `${server}/patient/deletePatient/${id}`,
      {
        headers: {
          Authorization: `${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    alert("Произошла ошибка при удалении пациента!");
  }
};
