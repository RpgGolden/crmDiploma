import React, { useState } from "react";
import styles from "./PatientRegistr.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";
import { CreatePatient } from "../../API/API";

const PatientRegistr = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setFormData({
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
  };
  //! регистрация пациента
  const clientReg = () => {
    CreatePatient(accessToken, formData).then((responce) => {
      if (responce.status === 200) {
        alert("Пользователь зарегистрирован!");
        handleCancel();
      } else alert("Произошла ошибка!");
    });
  };
  return (
    <div>
      <HeadMenu state={"register"} />
      <div className={styles.PatientRegistr}>
        <div>
          <h1>Регистрация пациента</h1>
          <div className={styles.data_container}>
            <div className={styles.leftbox}>
              <p>Паспортные данные</p>
              <input
                type="text"
                placeholder="Фамилия"
                name="surname"
                onChange={handleInputChange}
                value={formData.surname}
              />
              <input
                type="text"
                placeholder="Имя"
                name="name"
                onChange={handleInputChange}
                value={formData.name}
              />
              <input
                type="text"
                placeholder="Отчество"
                name="patronymic"
                onChange={handleInputChange}
                value={formData.patronymic}
              />
              <input
                type="text"
                placeholder="Паспорт"
                name="passport"
                onChange={handleInputChange}
                value={formData.passport}
              />
              <input
                type="text"
                placeholder="Прописка"
                name="registration"
                onChange={handleInputChange}
                value={formData.registration}
              />
            </div>
            <div className={styles.rightbox}>
              <p>Прочие данные</p>
              <input
                type="text"
                placeholder="СНИЛС"
                name="snils"
                onChange={handleInputChange}
                value={formData.snils}
              />
              <input
                type="text"
                placeholder="ОМС"
                name="oms"
                onChange={handleInputChange}
                value={formData.oms}
              />
              <input
                type="text"
                placeholder="Телефон"
                name="phoneNumber"
                onChange={handleInputChange}
                value={formData.phoneNumber}
              />
              <input
                type="text"
                placeholder="Дата рождения"
                name="birthDate"
                onChange={handleInputChange}
                value={formData.birthDate}
              />
            </div>
          </div>

          <div className={styles.bottom_box}>
            <h2>Пол</h2>
            <div className={styles.label_box}>
              <label htmlFor="myRadio">
                <input
                  type="radio"
                  name="myRadio"
                  checked={formData.gender === "1"}
                  onChange={() => {
                    setFormData({ ...formData, gender: "1" });
                  }}
                />
                Мужской
              </label>
              <label>
                <input
                  type="radio"
                  name="myRadio"
                  checked={formData.gender === "2"}
                  onChange={() => {
                    setFormData({ ...formData, gender: "2" });
                  }}
                />
                Женский
              </label>
            </div>
            <div className={styles.button_box}>
              <button className={styles.but_left} onClick={handleCancel}>
                {" "}
                Очистить
              </button>
              <button className={styles.but_rig} onClick={clientReg}>
                Зарегистрировать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PatientRegistr;
