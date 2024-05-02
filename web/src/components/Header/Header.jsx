import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
function Header(props) {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    const userData = JSON.parse(storedUserData);
    setuserData(userData);
  }, []);

  const outFun = () => {
    localStorage.setItem("accessToken", null);
    localStorage.setItem("refreshToken", null);
    clearTimeout(localStorage.getItem("refreshTokensInterval"));
  };

  return (
    <div className={styles.Header}>
      <h3>{`${userData.surname} ${userData.name}`}</h3>
      <Link to="/">
        <button onClick={outFun}>Выйти</button>
      </Link>
    </div>
  );
}

export default Header;
