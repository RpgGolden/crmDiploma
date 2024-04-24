import React from "react";
import styles from "./Reception.module.scss";

function Reception(props) {
  return (
    <div className={styles.Reception}>
      <h1>Ближайший прием</h1>
      <div>
        <p><strong>Дата:</strong> {props.data.date}</p>
        <p><strong>Специалист:</strong> {props.data.specialist}</p>
        <p><strong>Врач:</strong> {props.data.doctor}</p>
      </div>
    </div>
  );
}

export default Reception;
