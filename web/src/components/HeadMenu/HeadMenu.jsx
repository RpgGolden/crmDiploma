import React from "react";
import styles from "./HeadMenu.module.scss";
function HeadMenu() {
  return (
    <div className={styles.HeadMenu}>
      <button>
        <img src="./img/View.png" alt="View" />
        Посмотреть
      </button>

      <button>
        <img src="./img/Add_ring.png" alt="View" />
        Добавить
      </button>
      <button>
        <img src="./img/Edit.png" alt="View" />
        Редактировать
      </button>
      <button>
        <img src="./img/File_dock.png" alt="View" />
        Записать на прием
      </button>
    </div>
  );
}

export default HeadMenu;
