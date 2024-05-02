import React, { useEffect, useState } from "react";
import styles from "./MakeAppointment.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";
import {
  GetAllApointment,
  GetAllDoctor,
  MakeApointmentApi,
} from "../../API/API";
import { Time } from "../TableRegistrar/Data";

function MakeAppointment(props) {
  const [modalDok, setModalDok] = useState(false);
  const [modalTime, setmodalTime] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  const [dateDoctor, setdateDoctor] = useState([]);
  const accessToken = localStorage.getItem("accessToken");

  const [appointmentData, setAppointmentData] = useState({
    date: "",
    doctor: "",
    doctorName: "",
    time: "",
    timeView: "",
  });
  const ClearData = () => {
    setAppointmentData({ date: "", doctor: "", time: "", timeView: "" });
    setRandomNumber(null);
  };

  const MakeApoint = () => {
    const data = {
      doctorId: appointmentData.doctor,
      date: appointmentData.date,
      time: appointmentData.time,
    };
    MakeApointmentApi(accessToken, data).then((response) => {
      ClearData();
      alert("Заявка успешно создана");
    });
  };

  useEffect(() => {
    if (
      appointmentData.date &&
      appointmentData.doctor &&
      appointmentData.time
    ) {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      setRandomNumber(randomNum);
    }
  }, [appointmentData]);

  const handleAppointmentDataChange = (key, value) => {
    setAppointmentData({ ...appointmentData, [key]: value });
  };

  useEffect(() => {
    GetAllDoctor(accessToken).then((response) => {
      setdateDoctor(response.data);
    });
  }, []);

  return (
    <div>
      <HeadMenu state={"register"} />

      <div className={styles.MakeAppointment}>
        <div>
          <div className={styles.data_container}>
            <div className={styles.leftbox}>
              <h1>Запись на прием</h1>

              <h4>Данные для записи</h4>
              <input
                onChange={(e) =>
                  handleAppointmentDataChange("date", e.target.value)
                }
                className={styles.list}
                type="date"
                placeholder="Дата"
                style={appointmentData.date ? { color: "#000" } : null}
                min={new Date().toISOString().split("T")[0]}
              />
              <div
                className={styles.list}
                onClick={() => setModalDok(!modalDok)}
                style={appointmentData.doctor ? { color: "#000" } : null}
              >
                {appointmentData.doctorName
                  ? appointmentData.doctorName
                  : "Врач"}
                <img src="./../img/arrow_bottom.svg" alt=">"></img>
              </div>
              {modalDok && (
                <div style={{ top: "430px" }} className={styles.modalWindow}>
                  <ul>
                    {dateDoctor.map((item) => (
                      <li
                        onClick={() => {
                          setAppointmentData({
                            ...appointmentData,
                            doctor: item.id,
                            doctorName: `${item.surname} ${item.name} ${item.patronymic}`,
                          });
                          setModalDok(!modalDok);
                        }}
                      >
                        {item.surname} {item.name} {item.patronymic}(
                        {item.specialist})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div
                className={styles.list}
                onClick={() => setmodalTime(!modalTime)}
                style={appointmentData.timeView ? { color: "#000" } : null}
              >
                {modalTime && (
                  <div
                    style={{ top: "480px", left: "110px" }}
                    className={styles.modalWindow}
                  >
                    <ul>
                      {Time.map((item) => (
                        <li
                          onClick={() =>
                            setAppointmentData({
                              ...appointmentData,
                              time: item.key,
                              timeView: item.time,
                            })
                          }
                        >
                          {item.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {appointmentData.timeView ? appointmentData.timeView : "Время"}
                <img src="./../img/arrow_bottom.svg" alt=">"></img>
              </div>
              <div className={styles.button__cont}>
                <button className={styles.buttonClear} onClick={ClearData}>
                  Очистить
                </button>
                {randomNumber && (
                  <button className={styles.talon_btn} onClick={MakeApoint}>
                    Записаться
                  </button>
                )}
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
                  <p className={styles.talon_date}>
                    Дата: {appointmentData.date}
                  </p>
                  <p className={styles.talon_timse}>
                    Время: {appointmentData.timeView}
                  </p>
                  <p className={styles.talon_timse}>
                    Иммунология и аллергология
                  </p>
                  <p className={styles.talon_timse}>
                    Врач: {appointmentData.doctorName}
                  </p>
                  <p className={styles.talon_kab}>Кабинет №{randomNumber}</p>
                  <p>
                    При невозможности прийти в указанное время просьба сообщить
                    об этом заранее
                  </p>
                </div>
              </div>
              {randomNumber && (
                <button className={styles.talon_btn}>Распечатать</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeAppointment;
