import React from "react";
import styles from "./PatientRegistr.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";
const PatientRegistr = () => {
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
              <button className={styles.but_left}> Отмена</button>
              <button className={styles.but_rig}>Зарегистрировать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PatientRegistr;
