import React from "react";
import { Column, useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./column";
import { useMemo } from "react";
import styles from "./BasicTable.module.scss";
import EntryRow from "./EntryRow";
import SettingsIcon from "@mui/icons-material/Settings";
import SortIcon from "@mui/icons-material/Sort";
//import classes from "./MemberTable.module.scss";

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table
      id={styles.main_table}
      {...getTableProps()}
      className={styles.main_table}
    >
      <thead >
        {headerGroups.map((headerGroup) => (
          <tr className={styles.header_row} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th  {...column.getHeaderProps()}>
                <span >
                <label >{column.render("Header")}</label>
                {(column.render('Header') === "STATUS") && <img className={styles.info_icon} src="https://img.icons8.com/ios-glyphs/30/000000/info--v1.png"/>}
                {(column.render('Header') !== "NO-SHOW/LATE") && (column.render('Header') !== "") && <SortIcon id={styles.sort_icon} style={{color: '#BDBDBD'}}/>}
                {(column.render('Header') === "STATUS") && <div className={styles.settings_div}><SettingsIcon id={styles.settings_icon} style={{color: '#696C74'}}/></div>}
                
                </span>
                
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          // return <EntryRow row={row} />;
        })}
      </tbody>
    </table>
  );
};
