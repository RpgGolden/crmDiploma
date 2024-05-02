import React, { useContext, useEffect, useState } from "react";
import styles from "./EditPatient.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";
import { GetPatientId, UpdateDataPatientForId } from "../../API/API";
import DataContext from "../../context";
import { useNavigate } from "react-router-dom";

const EditPatient = () => {
  const [cardData, setCardData] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const [idPatientSelected, setidPatientSelected] = useState(null);
  const { contData } = useContext(DataContext);

  const handleInput = (el, key) => {
    const query = el.target.value;
    let date = cardData;
    date[key] = query;
    setCardData({ ...date });
  };

  const cancellation = () => {
    setCardData(cardData);
  };

  useEffect(() => {
    const data = sessionStorage.getItem("idClientSelect");
    contData.setSelectClient(data);
    GetPatientId(accessToken, data).then((response) => {
      setCardData(response.data);
    });
    setidPatientSelected(contData.selctClient);
  }, []);

  const handleSave = () => {
    const data = sessionStorage.getItem("idClientSelect");
    UpdateDataPatientForId(accessToken, cardData, data).then((response) => {
      if (response.status === 200) {
        alert("Изменения сохранены!");
      } else {
        alert("Произошла ошибка при внесении изменений!");
      }
    });
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
                onChange={(el) => handleInput(el, "phoneNumber")}
                value={cardData.phoneNumber}
              />
              <input
                type="text"
                placeholder="Дата рождения"
                onChange={(el) => handleInput(el, "birthDate")}
                value={cardData.birthDate}
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
export default EditPatient;
