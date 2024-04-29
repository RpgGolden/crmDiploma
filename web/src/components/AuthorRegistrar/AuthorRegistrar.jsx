import React from "react";
import styles from "./AuthorRegistrar.module.scss";
import { Link } from "react-router-dom";

function AuthorRegistrar() {
  return (
    <div className={styles.AuthorRegistrar}>
      <div className={styles.box}>
        <div className={styles.container}>
          <h2>Вход в аккаунт</h2>
          <input type="text" placeholder="Логин"></input>
          <input type="text" placeholder="Пароль"></input>
          <Link to="/Registrar">
            <button className={styles.button}>Войти</button>
          </Link>
          <Link to="/">
            <p>Вход для клиентов</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthorRegistrar;
