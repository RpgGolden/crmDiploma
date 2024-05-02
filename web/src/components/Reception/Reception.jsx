import React, { useEffect, useState } from "react";
import styles from "./Reception.module.scss";
import { GetAllApointment } from "../../API/API";
import moment from "moment";
import { Link } from "react-router-dom";

function Reception() {
  const accessToken = localStorage.getItem("accessToken");
  const [nearestAppointment, setNearestAppointment] = useState(null);

  useEffect(() => {
    GetAllApointment(accessToken).then((response) => {
      // Фильтрация записи с самым ближайшим временем и датой не раньше сегодняшней
      const nearest = response.data.reduce((nearestAppt, currentAppt) => {
        const currentDateTime = moment(
          `${currentAppt.date} ${currentAppt.time}`,
          "YYYY-MM-DD HH:mm"
        );
        const today = moment().startOf("day"); // Получаем начало сегодняшнего дня
        if (!nearestAppt && currentDateTime.isSameOrAfter(today)) {
          return currentAppt;
        } else if (
          currentDateTime.isSameOrAfter(today) &&
          currentDateTime.isBefore(
            moment(
              `${nearestAppt.date} ${nearestAppt.time}`,
              "YYYY-MM-DD HH:mm"
            )
          )
        ) {
          return currentAppt;
        }
        return nearestAppt;
      }, null);
      setNearestAppointment(nearest);
    });
  }, [accessToken]);

  return (
    <div className={styles.Reception}>
      <h1>Ближайший прием:</h1>
      <div>
        {nearestAppointment && (
          <div>
            <p>
              <strong>Дата:</strong> {nearestAppointment.date}
            </p>
            <p>
              <strong>Специалист:</strong>{" "}
              {nearestAppointment.doctor.specialist}
            </p>
            <p>
              <strong>Врач:</strong>{" "}
              {`${nearestAppointment.doctor.surname} ${nearestAppointment.doctor.name} ${nearestAppointment.doctor.patronymic}`}
            </p>
          </div>
        )}
        {!nearestAppointment && (
          <div>
            <p>Ближайшие приемы отсутствуют.</p>
            <Link to="/Client/MakeAppointment">
              <button className={styles.buttonApoint}>
                <img src="./../img/add.svg" />
                Записаться на прием
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reception;
