import React, { useMemo, useState } from "react";
import styles from "./TableRegistrar.module.scss";
import { tableData, tableHead } from "./Data";

function TableRegistrar() {
  const tableDataMemo = useMemo(() => tableData, []);
  const [filterShow, setFilterShow] = useState(false);
  const [filtredData, setFiltredData] = useState(tableDataMemo);

  const sherchData = (el) => {
    const query = el.target.value;

    setFiltredData(
      tableDataMemo.filter((item) => {
        return (
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.surname.toLowerCase().includes(query.toLowerCase()) ||
          item.patronymic.toLowerCase().includes(query.toLowerCase()) ||
          item.snils.toLowerCase().includes(query.toLowerCase()) ||
          item.passport.toLowerCase().includes(query.toLowerCase())
        );
      })
    );
  };

  return (
    <div className={styles.TableRegistrar}>
      <div className={styles.head}>
        <div className={styles.filters}>
          <button onClick={() => setFilterShow(!filterShow)}>
            <img src="./img/filter.png" alt="filter" />
            Фильтр
          </button>
          {filterShow && (
            <>
              <label className={styles.labelradio} htmlFor="myRadio">
                <input type="checkbox" id="men" name="gender" /> Мужской
                <input type="checkbox" id="women" name="gender" /> Женский
              </label>
              <div className={styles.date}>
                <input type="date" />
                <div className={styles.lin}></div>
                <input type="date" />
              </div>
            </>
          )}
        </div>
        <div className={styles.right_block}>
          <div className={styles.search}>
            <img src="./img/Search_light.png" alt="Search_light" />
            <input
              onChange={sherchData}
              placeholder="Поиск по ФИО, СНИЛС или паспорту"
              type="text"
            />
          </div>
          <button>Найти пациента</button>
        </div>
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
            {filtredData.map((row) => (
              <tr key={row.id}>
                {tableHead.map((el) => (
                  <td key={el.key}>{row[`${el.key}`]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.text_length}>
        <p>Всего строк: {filtredData.length}</p>
      </div>
    </div>
  );
}

export default TableRegistrar;
