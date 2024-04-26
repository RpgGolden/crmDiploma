import React from "react";
import styles from "./AuthorizationClient.module.scss";
import { Link } from "react-router-dom";

function AuthorizationClient() {
  return (
    <div className={styles.AuthorRegistrar}>
      <div className={styles.box}>
        <div className={styles.container}>
          <h2>Вход в аккаунт</h2>
          <input type="text" placeholder="Логин"></input>
          <input type="text" placeholder="Пароль"></input>
          <Link to="/Client">
            <button className={styles.buttonIn}>Войти</button>
          </Link>
          <Link to="/RegisterClient">
            <button className={styles.buttonRegister}>Создать профиль</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthorizationClient;
