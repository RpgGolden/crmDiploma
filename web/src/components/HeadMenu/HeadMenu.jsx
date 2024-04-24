import React from "react";
import styles from "./HeadMenu.module.scss";
import { Link } from "react-router-dom";
function HeadMenu({ state }) {
  return (
    <>
      {state === "home" ? (
        <div className={styles.HeadMenu}>
          <button>
            <img src="./img/View.png" alt="View" />
            Посмотреть
          </button>

          <Link to="./../HomePage/PatientRegistr">
            <button>
              <img src="./img/Add_ring.png" alt="View" />
              Добавить
            </button>
          </Link>
          <button>
            <img src="./img/Edit.png" alt="View" />
            Редактировать
          </button>
          <button>
            <img src="./img/File_dock.png" alt="View" />
            Записать на прием
          </button>
        </div>
      ) : state === "register" ? (
        <div className={styles.HeadMenu}>
          <Link to="./..">
            <button>
              <img src="./../img/Home.png" alt="View" />
              На главную
            </button>
          </Link>
        </div>
      ) : (
        <div>w</div>
      )}
    </>
  );
}

export default HeadMenu;
