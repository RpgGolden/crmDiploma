import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className={styles.Header}>
      <h3>{props.name}</h3>
      <Link to="/">
        <button>Выйти</button>
      </Link>
    </div>
  );
}

export default Header;
