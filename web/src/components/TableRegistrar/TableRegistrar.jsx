import React from "react";
import styles from "./TableRegistrar.module.scss";
import { tableData, tableHead } from "./Data";

function TableRegistrar(props) {
  return (
    <div className={styles.TableRegistrar}>
      <div className={styles.head}>
        <button>
          <img src="./img/filter.png" alt="filter" />
          Фильтр
        </button>
        <label className={styles.labelradio} htmlFor="myRadio">
          <input type="radio" id="men" name="gender" checked /> Мужской
          <input type="radio" id="women" name="gender" /> Женский
        </label>
        <div className={styles.date}>
          <input type="date" />
          <div className={styles.lin}></div>
          <input type="date" />
        </div>
        <div className={styles.search}>
          <img src="./img/Search_light.png" alt="Search_light" />
          <input placeholder="Поиск по ФИО, СНИЛС или паспорту" type="text" />
        </div>
        <button>Найти пациента</button>
      </div>

      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              {tableHead.map((item) => (
                <th key={item.key}>{item.value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={row.id}>
                {tableHead.map((el) => (
                  <td key={el.key}>{row[`${el.key}`]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableRegistrar;
