import React from "react";
import styles from "./PatientRegistr.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";
import { Link } from "react-router-dom";
import { CreatePatient } from "../../API/API";

const PatientRegistr = () => {
  const accessToken = localStorage.getItem("accessToken");
  //! регистрация пациента
  const clientReg = () => {
    console.log("clientReg", accessToken);
    // const data = {
    //   surname: "Иванов",
    //   name: "Иван",
    //   patronymic: "Иванович",
    //   gender: "М",
    //   birthDate: "01.01.1999",
    //   phoneNumber: "8(888)888-88-88",
    //   snils: "111-111-111 11",
    //   oms: "1111 1111 1111 1111",
    //   passport: "6666 666666",
    //   registration: "Ростовсквя обл, г. Таганрог, ул. Никрасовская д. 26а",
    // };
    CreatePatient(accessToken, data).then((responce) => {
      console.log(responce);
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
              <input type="text" placeholder="Фамилия" />
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Отчество" />
              <input type="text" placeholder="Паспорт" />
              <input type="text" placeholder="Прописка" />
            </div>
            <div className={styles.rightbox}>
              <p>Прочие данные</p>
              <input type="text" placeholder="СНИЛС" />
              <input type="text" placeholder="ОМС" />
              <input type="text" placeholder="Телефон" />
              <input type="text" placeholder="Дата рождения" />
            </div>
          </div>

          <div className={styles.bottom_box}>
            <h2>Пол</h2>
            <div className={styles.label_box}>
              <label htmlFor="myRadio">
                <input type="radio" name="myRadio" />
                Мужской
              </label>
              <label>
                <input type="radio" name="myRadio" />
                Женский
              </label>
            </div>
            <div className={styles.button_box}>
              <Link to="./..">
                <button className={styles.but_left}> Отмена</button>
              </Link>
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
