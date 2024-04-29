import React, { useState } from "react";
import styles from "./AuthorizationClient.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../../API/API";

function AuthorizationClient() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    console.log(formData);
    Login(formData).then(LoginUserData=>{
      if(LoginUserData){
        navigate('/Client');
      }
    });
  };

  return (
    <div className={styles.AuthorRegistrar}>
      <div className={styles.box}>
        <div className={styles.container}>
          <h2>Вход в аккаунт</h2>
          <input
            type="text"
            placeholder="Логин"
            name="login"
            value={formData.login}
            onChange={handleInputChange}
          ></input>
          <input
            type="password"
            placeholder="Пароль"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          ></input>
          <button className={styles.buttonIn} onClick={handleLogin}>
            Войти
          </button>
          <Link to="/RegisterClient">
            <button className={styles.buttonRegister}>Создать профиль</button>
          </Link>
          <Link to="/Authorization">
            <p>Вход для регистратора</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthorizationClient;
