import React, { useEffect, useState } from "react";
import styles from "./ViewMyAppointment.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";
import { Link } from "react-router-dom";
import PopUp from "../../ui/PopUp/PopUp";
import { GetAllApointment } from "../../API/API";

function ViewMyAppointment() {
  const accessToken = localStorage.getItem("accessToken");
  const [appointmentData, setAppointmentData] = useState([]);
  const [indexPopUp, setindexPopUp] = useState(null);

  useEffect(() => {
    GetAllApointment(accessToken).then((response) => {
      setAppointmentData(response.data);
    });
  }, [indexPopUp, accessToken]);

  return (
    <div className={styles.ViewMyAppointment}>
      <HeadMenu state={"ViewMyAppointment"} />
      <div className={styles.box}>
        <div className={styles.container}>
          {appointmentData.length === 0 ? (
            <div className={styles.container}>
              <h1>У вас еще нет активных записей на прием</h1>
              <Link to="/Client/MakeAppointment">
                <button>
                  <img src="./../img/add.svg" alt="plus"/>
                  Записаться на прием
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <h1>Записи на прием</h1>
              {appointmentData.map((appointment, index) => (
                <div key={index} className={styles.Apointments}>
                  <p>
                    <strong>Дата:</strong> {appointmentData[index].date}
                  </p>
                  <p>
                    <strong>Время:</strong> {appointmentData[index].time}
                  </p>
                  <p>
                    <strong>Доктор:</strong>{" "}
                    {`${appointmentData[index].doctor.surname} ${appointmentData[index].doctor.name} ${appointmentData[index].doctor.patronymic}`}
                  </p>
                  <p>
                    <strong>Специальность:</strong>{" "}
                    {appointmentData[index].doctor.specialist}
                  </p>
                  <div className={styles.button__div}>
                    <button
                      className={styles.button__divFirst}
                      onClick={() => setindexPopUp(index)}
                    >
                      <img src="./../img/Trash.png" alt="trash"/>
                      Отменить прием
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {indexPopUp != null && (
        <PopUp
          title="Отмена приема"
          subtitle="Вы уверены, что хотите удалить запись?"
          indexPopUp={indexPopUp}
          setindexPopUp={setindexPopUp}
          appointmentData={appointmentData}
        />
      )}
    </div>
  );
}

export default ViewMyAppointment;
