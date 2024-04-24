import React from "react";
import styles from "./TableRegistrar.module.scss";

function Table(props) {
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
                <td key={el.key}>{row[`${el.key}`]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
