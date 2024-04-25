import React, { useEffect, useState } from "react";
import styles from "./ViewMyAppointment.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";
import { Link } from "react-router-dom";
import { Appointments } from "./data";

function ViewMyAppointment() {
  const [Apointment,SetApointment] = useState([]);
  useEffect(()=>{
    SetApointment(Appointments)
  },[])

  return (
    <div className={styles.ViewMyAppointment}>
       <HeadMenu state={"ViewMyAppointment"}/>
       <div className={styles.box}>
            <div className={styles.container}>
            {Apointment.length === 0 ? (
              <div className={styles.container}>
                <h1>У вас еще нет активных записей на прием</h1>
                <Link to="/Client/MakeAppointment">
                  <button><img src="./../img/add.svg"/>Записаться на прием</button>
                </Link>
              </div>
            ) : 
            (
              <div >
              <h1>Записи на прием</h1>
              {Apointment.map((appointment, index) => (
                <div key={index} className={styles.Apointments}>
                  <p><strong>Дата:</strong> {appointment.date}</p>
                  <p><strong>Время:</strong> {appointment.time}</p>
                  <p><strong>Доктор:</strong> {appointment.doctor}</p>
                  <p><strong>Специальность:</strong> {appointment.specialist}</p>
                  <div className={styles.button__div}>
                    <button className={styles.button__divFirst}><img src="./../img/Trash.png"/>Отменить прием</button>
                    <button><img src="./../img/Edit.png"/>Редактировать</button>
                  </div>
                </div>
              ))}
            </div>
            

            )
            }
              
            </div>
        </div>
    </div>
  );
}

export default ViewMyAppointment;
