import React, { useState } from "react";
import styles from "./EditPatient.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";
import { tableData } from "../TableRegistrar/Data";
const EditPatient = (props) => {
  const [cardData, setCardData] = useState(tableData[props.selctClient]);
  //   const [searchText, setSearchText] = useState("");

  const handleInput = (el, key) => {
    const query = el.target.value;
    let date = cardData;
    date[key] = query;
    setCardData({ ...date });
    console.log(date);
  };

  const cancellation = () => {
    setCardData(cardData);
  };
  return (
    <div>
      <HeadMenu state={"register"} />
      <div className={styles.EditPatient}>
        <div>
          <h1>Редактирование пациента</h1>
          <div className={styles.data_container}>
            <div className={styles.leftbox}>
              <p>Паспортные данные</p>
              <input
                type="text"
                placeholder="Фамилия"
                onChange={(el) => handleInput(el, "surname")}
                value={cardData.surname}
              />
              <input
                type="text"
                placeholder="Имя"
                onChange={(el) => handleInput(el, "name")}
                value={cardData.name}
              />
              <input
                type="text"
                placeholder="Отчество"
                onChange={(el) => handleInput(el, "patronymic")}
                value={cardData.patronymic}
              />
              <input
                type="text"
                placeholder="Паспорт"
                onChange={(el) => handleInput(el, "passport")}
                value={cardData.passport}
              />
              <input
                type="text"
                placeholder="Прописка"
                onChange={(el) => handleInput(el, "registration")}
                value={cardData.registration}
              />
            </div>
            <div className={styles.rightbox}>
              <p>Прочие данные</p>
              <input
                type="text"
                placeholder="СНИЛС"
                onChange={(el) => handleInput(el, "snils")}
                value={cardData.snils}
              />
              <input
                type="text"
                placeholder="ОМС"
                onChange={(el) => handleInput(el, "oms")}
                value={cardData.oms}
              />
              <input
                type="text"
                placeholder="Телефон"
                onChange={(el) => handleInput(el, "phone")}
                value={cardData.phone}
              />
              <input
                type="text"
                placeholder="Дата рождения"
                onChange={(el) => handleInput(el, "birthdate")}
                value={cardData.birthdate}
              />
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
              <button className={styles.but_left} onClick={cancellation}>
                Отмена
              </button>
              <button className={styles.but_rig}>Сохранить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditPatient;
