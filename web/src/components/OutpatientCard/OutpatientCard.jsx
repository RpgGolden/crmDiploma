import React, { useEffect, useState } from "react";
import styles from "./OutpatientCard.module.scss";
import HeadMenu from "../HeadMenu/HeadMenu";
import { tableHead, visitHistory } from "../TableRegistrar/Data";
import { GetPatientId } from "../../API/API";
function OutpatientCard(props) {
  const accessToken = localStorage.getItem('accessToken'); 

  const [cardData, setCardData] = useState([]);
  const [rowName, setRowName] = useState(tableHead);
  const [history, setHistory] = useState(visitHistory);
 
  useEffect(()=>{
    const idPatientSelect = localStorage.getItem("idClientSelect");
    GetPatientId(accessToken, idPatientSelect).then((response)=>{
      setCardData(response.data)
    })
    
  },[])

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
                      <td className={styles.td_riht}>{item.specialist}</td>
                    </tr>
                    <tr>
                      <td className={styles.td_left}>Врач</td>
                      <td className={styles.td_riht}>{item.doctor}</td>
                    </tr>
                    <tr>
                      <td className={styles.td_left}>Результат приема</td>
                      <td className={styles.td_riht}>{item.result}</td>
                    </tr>
                  </table>
                  <button>Распечатать</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OutpatientCard;
