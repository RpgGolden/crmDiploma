
import React, { useState } from "react";
import styles from "./MakeAppointment.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";
import { doctors, specialists, tableData } from "../TableRegistrar/Data";

function MakeAppointment(props) {
  const [modalSpec, setModalSpec] = useState(false);
  const [modalDok, setModalDok] = useState(false);

  const [specialist, setSpecialist] = useState("");
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState("");
  const [time, setTime] = useState("");

  const dateSelect = (el) => {
    setDate(el.target.value);
  };

  const selectTime = (el) => {
    setTime(el.target.value);
  };
  const liclick = (text) => {
    setModalSpec(false);
    setSpecialist(text);
  };
  const liclickDok = (text) => {
    setModalDok(false);
    setDoctor(text);
  };
  return (
    <div>
      <HeadMenu state={"register"} />

      <div className={styles.MakeAppointment}>
        <div>
          <div className={styles.data_container}>
            <div className={styles.leftbox}>
              <h1>Запись на прием</h1>

              <h4>Данные для записи</h4>
              {/* <p className={styles.title}>
                {tableData[props.selctClient].surname}{" "}
                {tableData[props.selctClient].name}{" "}
                {tableData[props.selctClient].patronymic}
              </p> */}
              <div
                className={styles.list}
                onClick={() => setModalSpec(!modalSpec)}
                style={specialist ? { color: "#000" } : null}
              >
                {specialist ? specialist : "Специалист"}
                <img src="./../img/arrow_bottom.svg" alt=">"></img>
              </div>
              {modalSpec && (
                <div style={{ top: "380px" }} className={styles.modalWindow}>
                  <ul>
                    {specialists.map((item) => (
                      <li onClick={() => liclick(item)}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              <input
                onChange={dateSelect}
                className={styles.list}
                type="date"
                placeholder="Дата"
                style={date ? { color: "#000" } : null}
              />
              <div
                className={styles.list}
                onClick={() => setModalDok(!modalDok)}
                style={doctor ? { color: "#000" } : null}
              >
                {doctor ? doctor : "Врач"}
                <img src="./../img/arrow_bottom.svg" alt=">"></img>
              </div>
              {modalDok && (
                <div style={{ top: "480px" }} className={styles.modalWindow}>
                  <ul>
                    {doctors.map((item) => (
                      <li
                        onClick={() =>
                          liclickDok(
                            `${item.surname} ${item.name} ${item.patronymic}`
                          )
                        }
                      >
                        {item.surname} {item.name} {item.patronymic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <input
                onChange={selectTime}
                style={time ? { color: "#000" } : null}
                className={styles.list}
                type="time"
                placeholder="Время"
              />

              <div className={styles.bottom_box}>
                <div className={styles.button_box}>
                  <button className={styles.but_left}> Отмена</button>
                  <button className={styles.but_rig}>Записать</button>
                </div>
              </div>
            </div>

            <div className={styles.rightbox}>
              <p>Талон на прием</p>
              <div className={styles.talon}>
                <div className={styles.talon_title}>
                  <p>Наименование медицинского учреждения</p>
                  <p>Адрес медицинского учреждения</p>
                </div>
                <div>
                  <p>Талон на прием к врачу №1</p>
                  <p className={styles.talon_date}>15 марта 2024</p>
                  <p>Пятница</p>
                  <p className={styles.talon_timse}>10:00</p>
                  <p className={styles.talon_timse}>
                    Иммунология и аллергология
                  </p>
                  <p className={styles.talon_timse}>ФИО Врача</p>
                  <p className={styles.talon_kab}>Кабинет №111</p>
                  <p>
                    При невозможности прийти в указанное время просьба сообщить
                    об этом заранее
                  </p>
                </div>
              </div>
              {/* <button className={styles.talon_btn}>Распечатать</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeAppointment;
