import React, { useContext, useEffect, useState } from "react";
import styles from "./HeadMenu.module.scss";
import { Link } from "react-router-dom";
import DataContext from "../../context";
import { deleteAppointment } from "../../API/API";
function HeadMenu({ state, setFiltredData, filtredData }) {
  const { contData } = useContext(DataContext);
  const accessToken = localStorage.getItem("accessToken");
  const [useFlag, setuseFlag] = useState(false)
  const deletePatien = () => {
    if(useFlag){
      deleteAppointment(accessToken, contData.selctClient).then((res) => {
        if (res.status === 200) {
          contData.setSelectClient(null);
          sessionStorage.setItem("idClientSelect", null);
          setFiltredData(
            filtredData.filter((item) => item.id !== contData.selctClient)
          );
          alert("Пользователь удален");
        } else alert("Произошла ошибка");
      });
    }else{
      alert("Сначала выберите пользователя, которого хотите удалить!")
    }
  };

    useEffect(()=>{
      ((contData.selctClient === null || sessionStorage.getItem("idClientSelect") === null 
      || contData.selctClient === "null" || sessionStorage.getItem("idClientSelect") === "null")) ? setuseFlag(false) : setuseFlag(true);
    }, [contData.selctClient])

  return (
    <>
      {state === "home" ? (
        <div className={styles.HeadMenu}>
          <Link to={useFlag && "./../Registrar/OutpatientCard"}>
            <button>
              <img src="./img/View.png" alt="View" />
              Посмотреть
            </button>
          </Link>
          <Link to={useFlag && "./EditPatient"}>
            <button>
              <img src="./img/Edit.png" alt="View" />
              Редактировать
            </button>
          </Link>
          <Link to={useFlag && "./MakeAppointmentRegistrar"}>
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
          <button onClick={deletePatien}>
            <img src="./img/Trash.png" alt="View" />
            Удалить
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
      ) : state === "ViewMyAppointment" ? (
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
            <Link to="./../MakeAppointmentRegistrar">
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
          </div>
        )
      )}
    </>
  );
}

export default HeadMenu;
