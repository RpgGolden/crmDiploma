import React from "react";
import styles from "./ViewMyAppointment.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";
import { Link } from "react-router-dom";

function ViewMyAppointment() {
  return (
    <div className={styles.ViewMyAppointment}>
       <HeadMenu state={"ViewMyAppointment"}/>
       <div className={styles.box}>
            <div className={styles.container}>
              <h1>У вас еще нет записей на прием</h1>
                <Link to="/Client/MakeAppointment"><button><img src="./../img/add.svg"/>Записаться на прием</button></Link>
            </div>
        </div>
    </div>
  );
}

export default ViewMyAppointment;
