import React from "react";
import styles from "./HeadMenu.module.scss";
import { Link } from "react-router-dom";
function HeadMenu({ state, selctClient }) {
  return (
    <>
      {state === "home" ? (
        <div className={styles.HeadMenu}>
          <Link to={selctClient && "./../Registrar/OutpatientCard"}>
            <button>
              <img src="./img/View.png" alt="View" />
              Посмотреть
            </button>
          </Link>
          <Link to={selctClient && "./EditPatient"}>
            <button>
              <img src="./img/Edit.png" alt="View" />
              Редактировать
            </button>
          </Link>
          <Link to={selctClient && "./MakeAppointment"}>
            <button>
              <img src="./img/File_dock.png" alt="View" />
              Записать на прием
            </button>
          </Link>
          <Link to="./../Registrar/PatientRegistr">
            <button>
              <img src="./img/Add_ring.png" alt="View" />
              Добавить пациента
            </button>
          </Link>
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
          <Link to="MakeAppointment">
            <button>
              <img src="./img/add.svg" alt="View" />
              Записаться на прием
            </button>
          </Link>
          <Link to="ViewMyAppointment">
            <button>
              <img src="./img/View.png" alt="View" />
              Мои записи на прием
            </button>
          </Link>
          <Link to="AccounClient">
            <button>
              <img src="./img/Home.png" alt="View" />
              Редактировать аккаунт
            </button>
          </Link>
        </div>
      ): state === "ViewMyAppointment" ? (
        <div className={styles.HeadMenu}>
          <Link to="/Client">
            <button>
              <img src="./../img/Home.png" alt="View" />
             На Главную
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
            <Link to="./../MakeAppointment">
              <button>
                <img src="./../img/File_dock.png" alt="View" />
                Записать на прием
              </button>
            </Link>
            <Link to="./../EditPatient">
              <button>
                <img src="./../img/Edit.png" alt="View" />
                Редактировать
              </button>
            </Link>
            <button>
              <img src="./../img/Trash.png" alt="View" />
              Удалить
            </button>
          </div>
        )
      )
      }
    </>
  );
}

export default HeadMenu;
