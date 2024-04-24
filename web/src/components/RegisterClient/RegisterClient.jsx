import React from "react";
import styles from "./RegisterClient.module.scss";
import { Link } from "react-router-dom";

function RegisterClient() {
  return (
    <div className={styles.AuthorRegistrar}>
      <div className={styles.box}>
        <div className={styles.container}>
          <h2>Вход в аккаунт</h2>
          <input type="text" placeholder="Логин"></input>
          <input type="text" placeholder="Пароль"></input>
          <input type="text" placeholder="Пароль"></input>
          <Link to="/HomePage">
            <button className={styles.button}>Войти</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterClient;
