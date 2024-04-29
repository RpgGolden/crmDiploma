import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
function Header(props) {
  const [userData, setuserData] = useState([])
  useEffect(()=>{
    const storedUserData = localStorage.getItem('userData');
    const userData = JSON.parse(storedUserData);
    setuserData(userData)

  },[])

  return (
    <div className={styles.Header}>
      <h3>{`${userData.surname} ${userData.name}`}</h3>
      <Link to="/">
        <button>Выйти</button>
      </Link>
    </div>
  );
}

export default Header;
