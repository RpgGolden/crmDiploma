import React from "react";
import styles from "./MakeAppointment.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";

function MakeAppointment() {
  return (
    <div className={styles.MakeAppointment}>
       <HeadMenu state={"ViewMyAppointment"}/>
       <div className={styles.box}>
            <div className={styles.container}>
            <h1>запись на прием </h1>
            <div>
              <h3>Данные для записи</h3>
              <p>ФИО пациента</p>
              <input type="text" placeholder="Пароль"></input>
              <input type="text" placeholder="Пароль"></input>
              <input type="text" placeholder="Пароль"></input>
              <input type="text" placeholder="Пароль"></input>

            </div>
            </div>
        </div>
      
    </div>
  );
}

export default MakeAppointment;
