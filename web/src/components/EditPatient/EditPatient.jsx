import React, { useEffect, useState } from "react";
import styles from "./EditPatient.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";
import { tableData } from "../TableRegistrar/Data";
const EditPatient = (props) => {
  const [cardData, setCardData] = useState(tableData[props.selctClient]);
  const [CheckedStatus, setCheckedStatus] = useState(1);

  //   const [searchText, setSearchText] = useState("");

  const handleInput = (el, key) => {
    const query = el.target.value;
    let date = cardData;
    date[key] = query;
    setCardData({ ...date });
    console.log(date);
  };

  const cancellation = () => {
    console.log(cardData);
    setCardData(cardData);
  };

  useEffect(()=>{
    console.log(CheckedStatus)
  },CheckedStatus)
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
              <label>
                  <input
                  type="checkbox"
                  name="МУЖ"
                  checked={cardData.gender === 1}
                  onChange={() => setCardData({ ...cardData, gender: 1 })}
                />               
              Мужской
              </label>
              <label>
              <input
                  type="checkbox"
                  name="ЖЕН"
                  checked={cardData.gender === 2}
                  onChange={() => setCardData({ ...cardData, gender: 2 })}
                />               
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
