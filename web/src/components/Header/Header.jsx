import React from "react";
import styles from "./Header.module.scss";
function Header() {
  return (
    <div className={styles.Header}>
      <h3>Имя Регистратора</h3>
      <button>Выйти</button>
    </div>
  );
}

export default Header;
