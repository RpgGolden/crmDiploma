import React from "react";
import styles from "./HeadMenu.module.scss";
import { Link } from "react-router-dom";
function HeadMenu({ state }) {
  return (
    <>
      {state === "home" ? (
        <div className={styles.HeadMenu}>
          <Link to="./../Registrar/OutpatientCard">
            <button>
              <img src="./img/View.png" alt="View" />
              Посмотреть
            </button>
          </Link>

          <Link to="./../Registrar/PatientRegistr">
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
      ) : state === "HomeClient" ? (
        <div className={styles.HeadMenu}>
          <Link to="./..">
            <button>
              <img src="./../img/add.svg" alt="View" />
              Записаться на прием
            </button>
          </Link>
          <Link to="./..">
            <button>
              <img src="./../img/View.png" alt="View" />
              Мои записи на прием
            </button>
          </Link>
          <Link to="./..">
            <button>
              <img src="./../img/Home.png" alt="View" />
              Редактировать аккаунт
            </button>
          </Link>
        </div>
      ) : (
        state === "card" && (
          <div className={styles.HeadMenu}>
            <Link to="./..">
              <button>
                <img src="./../img/Home.png" alt="View" />
                На главную
              </button>
            </Link>
            <button>
              <img src="./img/File_dock.png" alt="View" />
              Записать на прием
            </button>
            <button>
              <img src="./img/Edit.png" alt="View" />
              Редактировать
            </button>
          </div>
        )
      )
      }
    </>
  );
}

export default HeadMenu;
