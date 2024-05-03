import React, { useEffect, useState } from "react";
import styles from "./AccounClient.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";
import { GetUsersData, PatientUpdate } from "../../API/API";
const AccounClient = (props) => {
  const accessToken = localStorage.getItem("accessToken");
  const [formData, setFormData] = useState({
    surname: "",
    name: "",
    patronymic: "",
    passport: "",
    registration: "",
    snils: "",
    oms: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
  });

  useEffect(() => {
    GetUsersData(accessToken).then((response) => {
      const data = response.data;
      setFormData((prevData) => ({
        surname: data.surname || prevData.surname,
        name: data.name || prevData.name,
        patronymic: data.patronymic || prevData.patronymic,
        passport: data.passport || prevData.passport,
        registration: data.registration || prevData.registration,
        snils: data.snils || prevData.snils,
        oms: data.oms || prevData.oms,
        phoneNumber: data.phoneNumber || prevData.phoneNumber,
        birthDate: data.birthDate || prevData.birthDate,
        gender: data.gender || prevData.gender,
      }));
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    PatientUpdate(accessToken, formData).then((response) => {
      if (response.status === 200) {
        alert("Изменения внесены!");
      } else {
        alert("Произошла ошибка при внесении изменений!");
      }
    });
  };

  const handleCancel = () => {
    setFormData({
      surname: "",
      firstName: "",
      patronymic: "",
      passport: "",
      registration: "",
      snils: "",
      oms: "",
      phoneNumber: "",
      birthDate: "",
      gender: "",
    });
  };

  return (
    <div>
      <HeadMenu state={"register"} />
      <div className={styles.EditPatient}>
        <div>
          <h1>Редактирование аккаунта</h1>
          <div className={styles.data_container}>
            <div className={styles.leftbox}>
              <p>Паспортные данные</p>
              <input
                type="text"
                placeholder="Фамилия"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                disabled="true"
              />
              <input
                type="text"
                placeholder="Имя"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                disabled="true"
              />
              <input
                type="text"
                placeholder="Отчество"
                name="patronymic"
                value={formData.patronymic}
                onChange={handleInputChange}
                disabled="true"
              />
              <input
                type="text"
                placeholder="Паспорт"
                name="passport"
                value={formData.passport}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Прописка"
                name="registration"
                value={formData.registration}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.rightbox}>
              <p>Прочие данные</p>
              <input
                type="text"
                placeholder="СНИЛС"
                name="snils"
                value={formData.snils}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="ОМС"
                name="oms"
                value={formData.oms}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Телефон"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Дата рождения"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={styles.bottom_box}>
            <h2>Пол</h2>
            <div className={styles.label_box}>
              <label htmlFor="myRadio">
                <input
                  type="checkbox"
                  name="МУЖ"
                  checked={formData.gender === "1" || formData.gender === 1}
                  onChange={() => {
                    setFormData({ ...formData, gender: "1" });
                  }}
                />
                Мужской
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ЖЕН"
                  checked={formData.gender === "2" || formData.gender === 2}
                  onChange={() => {
                    setFormData({ ...formData, gender: "2" });
                  }}
                />
                Женский
              </label>
            </div>
            <div className={styles.button_box}>
              <button className={styles.but_left} onClick={handleCancel}>
                Отмена
              </button>
              <button className={styles.but_rig} onClick={handleSave}>
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccounClient;
