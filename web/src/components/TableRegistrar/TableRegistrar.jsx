import React, { useEffect, useMemo, useState } from "react";
import styles from "./TableRegistrar.module.scss";
import { tableData, tableHead } from "./Data";
import Table from "./Table";
import HeadMenu from "../HeadMenu/HeadMenu";

function TableRegistrar() {
  const tableDataMemo = useMemo(() => tableData, []);
  const tableHeadMemo = useMemo(() => tableHead, []);
  const [filterShow, setFilterShow] = useState(false);
  const [filtredData, setFiltredData] = useState(tableDataMemo);
  const [isChecked, setIsChecked] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [gender, setGender] = useState({});
  const [search, setSearch] = useState("");

  const handleStartDateChange = (event) => {
    const selectedStartDate = event.target.value;
    setStartDate(selectedStartDate);
  };

  //! филтрация по дате рождения
  const handleEndDateChange = (event) => {
    const selectedEndDate = event.target.value;
    setEndDate(selectedEndDate);
  };
  const genderFilterFun = (fd) => {
    if (startDate && endDate) {
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);
      const filtered = fd.filter((item) => {
        const itemDate = new Date(item.birthdate);
        return (
          itemDate.getTime() >= startDateObj.getTime() &&
          itemDate.getTime() <= endDateObj.getTime()
        );
      });

      return filtered;
    } else {
      return tableDataMemo;
    }
  };

  //! фильтрация по гендеру
  const genderSelect = (event) => {
    const { id, checked } = event.target;
    setGender({ id, checked });
    if (checked) {
      setIsChecked(id);
    } else {
      setIsChecked("");
    }
  };

  const genderFilter = ({ id, checked }, fd) => {
    if (id === "men" && checked === true) {
      fd = fd.filter((item) => {
        return item.gender.toLowerCase().includes("М".toLowerCase());
      });
    } else if (id === "women" && checked === true) {
      fd = fd.filter((item) => {
        return item.gender.toLowerCase().includes("Ж".toLowerCase());
      });
    }
    return fd;
  };

  const sherchData = (el) => {
    const query = el.target.value;
    setSearch(query);
  };

  //! функция фильтрации
  useEffect(() => {
    let fd = tableDataMemo;
    setFiltredData(fd);

    if (search) {
      fd = fd.filter((item) => {
        return (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.surname.toLowerCase().includes(search.toLowerCase()) ||
          item.patronymic.toLowerCase().includes(search.toLowerCase()) ||
          item.snils.toLowerCase().includes(search.toLowerCase()) ||
          item.passport.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
    if (gender) {
      fd = genderFilter(gender, fd);
    }
    if (endDate && startDate) {
      fd = genderFilterFun(fd);
    }
    setFiltredData(fd);
  }, [gender, startDate, endDate, search]);

  return (
    <div>
      <HeadMenu state={"home"} />
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
                  />
                  Мужской
                  <input
                    type="checkbox"
                    id="women"
                    name="gender"
                    checked={isChecked === "women" ? true : false}
                    onChange={genderSelect}
                  />
                  Женский
                </label>
                <div className={styles.date}>
                  <input type="date" onChange={handleStartDateChange} />
                  <div className={styles.lin}></div>
                  <input type="date" onChange={handleEndDateChange} />
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
            {/* <button>Найти пациента</button> */}
          </div>
        </div>

        <Table filtredData={filtredData} tableHead={tableHeadMemo} />
        <div className={styles.text_length}>
          <p>Всего строк: {filtredData.length}</p>
        </div>
      </div>
    </div>
  );
}

export default TableRegistrar;
