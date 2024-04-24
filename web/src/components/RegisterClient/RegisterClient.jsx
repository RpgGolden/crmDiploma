import React from "react";
import styles from "./RegisterClient.module.scss";
import { Link } from "react-router-dom";

function RegisterClient() {
  return (
    <div className={styles.AuthorRegistrar}>
      <div className={styles.box}>
        <div className={styles.container}>
          <h2>Регистрация аккаунта</h2>
          <input type="text" placeholder="Фамилия"></input>
          <input type="text" placeholder="Имя"></input>
          <input type="text" placeholder="Логин"></input>
          <input type="text" placeholder="Пароль"></input>
          <input type="text" placeholder="Пароль"></input>
          <Link to="/Client">
            <button className={styles.buttonRegister}>Зарегистрироваться</button>
          </Link>
          <Link to="/AuthorizationClient">
            <button className={styles.buttonIn}>Войти</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterClient;
