import React, { useContext, useEffect, useState } from "react";
import styles from "./OutpatientCard.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";
import { tableHead } from "../TableRegistrar/Data";
import { GetAllPatientAppoint, GetPatientId } from "../../API/API";
import DataContext from "../../context";
function OutpatientCard() {
  const [cardData, setCardData] = useState([]);
  const [rowName] = useState(tableHead);
  const [history, setHistory] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  const { contData } = useContext(DataContext);
  useEffect(() => {
    const idPat = sessionStorage.getItem("idClientSelect");
    contData.setSelectClient(idPat);
    GetPatientId(accessToken, idPat).then((response) => {
      setCardData(response.data);
    });

    GetAllPatientAppoint(accessToken, idPat).then((response) => {
      setHistory(response.data);
    });
  }, [accessToken, contData]);

  return (
    <div>
      <HeadMenu state={"card"} />
      <div className={styles.OutpatientCard}>
        <div className={styles.container_out}>
          <div className={styles.left}>
            <h2>Амбулаторная карта</h2>
            <table>
              {rowName.map((el) => (
                <tr>
                  <td className={styles.td1}>{el.value}</td>
                  <td className={styles.td2}>{cardData[el.key]}</td>
                </tr>
              ))}
            </table>
          </div>
          <div className={styles.right}>
            <h2>История посещений</h2>
            {history.length !== 0 ? (
              <div className={styles.scroll_box}>
                {history.map((item) => (
                  <div className={styles.table_box}>
                    <table>
                      <tr>
                        <td className={styles.td_left}>Дата</td>
                        <td className={styles.td_riht}>{item.date}</td>
                      </tr>
                      <tr>
                        <td className={styles.td_left}>Специалист</td>
                        <td className={styles.td_riht}>
                          {item.doctor.specialist}
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.td_left}>Врач</td>
                        <td
                          className={styles.td_riht}
                        >{`${item.doctor.surname} ${item.doctor.name} ${item.doctor.patronymic}`}</td>
                      </tr>
                      <tr>
                        <td className={styles.td_left}>Результат приема</td>
                        <td className={styles.td_riht}>{item.status}</td>
                      </tr>
                    </table>
                    <button>Распечатать</button>
                  </div>
                ))}
              </div>
            ) : (
              <h3>У пациента нет записей</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default OutpatientCard;
