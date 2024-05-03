import React, { useContext } from "react";
import styles from "./TableRegistrar.module.scss";
import DataContext from "../../context";

function Table(props) {
  const { contData } = useContext(DataContext);
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            {props.tableHead.map((item) => (
              <th key={item.key}>{item.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.filtredData.map((row) => (
            <tr key={row.id}>
              {props.tableHead.map((el) => (
                <td
                  style={
                    row.id === contData?.selctClient
                      ? { backgroundColor: "#C7EBF2" }
                      : null
                  }
                  key={el.key}
                  onClick={() => props.selectTd(row.id)}
                >
                  {el.key === "gender"
                    ? row.gender === 1
                      ? "М"
                      : "Ж"
                    : row[`${el.key}`]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
