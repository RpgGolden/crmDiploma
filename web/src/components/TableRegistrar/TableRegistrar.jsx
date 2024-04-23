import React, { useMemo, useState } from "react";
import styles from "./TableRegistrar.module.scss";
import { tableData, tableHead } from "./Data";
import Table from "./Table";

function TableRegistrar() {
  const tableDataMemo = useMemo(() => tableData, []);
  const tableHeadMemo = useMemo(() => tableHead, []);
  const [filterShow, setFilterShow] = useState(false);
  const [filtredData, setFiltredData] = useState(tableDataMemo);
  const [isChecked, setIsChecked] = useState("");

  const genderSelect = (event) => {
    const { id, checked } = event.target;
    console.log({ id, checked });
    if (checked) {
      setIsChecked(id);
    } else {
      setIsChecked("");
    }
    genderFilter({ id, checked });
  };

  const genderFilter = ({ id, checked }) => {
    setFiltredData(tableDataMemo);
    if (id === "men" && checked === true) {
      setFiltredData(
        tableDataMemo.filter((item) => {
          return item.gender.toLowerCase().includes("М".toLowerCase());
        })
      );
    } else if (id === "women" && checked === true) {
      setFiltredData(
        tableDataMemo.filter((item) => {
          return item.gender.toLowerCase().includes("Ж".toLowerCase());
        })
      );
    }
  };

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
                <input
                  type="checkbox"
                  id="men"
                  name="gender"
                  checked={isChecked === "men" ? true : false}
                  onChange={genderSelect}
                />{" "}
                Мужской
                <input
                  type="checkbox"
                  id="women"
                  name="gender"
                  checked={isChecked === "women" ? true : false}
                  onChange={genderSelect}
                />{" "}
                Женский
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

      <Table filtredData={filtredData} tableHead={tableHeadMemo} />

      <div className={styles.text_length}>
        <p>Всего строк: {tableDataMemo.length}</p>
      </div>
    </div>
  );
}

export default TableRegistrar;
