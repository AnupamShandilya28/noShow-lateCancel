import React, { useMemo, useState } from "react";
import { useTable, useSortBy, Column } from "react-table";
import MOCK_DATA from "../data/MOCK_DATA.json";
import { COLUMNS } from "../data/columns";
import styles from "./ManageClassTable.module.scss";
import SortIcon from "@mui/icons-material/Sort";
import InfoIcon from "@mui/icons-material/Info";
import ManageClassTableRow from "./ManageClassTableRow";

const ManageClassTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );
  return (
    <div id={styles.tableouterdiv}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr id={styles.trstyle} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                // const tableheadname = "tablehead" + " " + column.render("id");
                return (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <div className={styles.thstyle}>
                      <span id={styles.titlestyle}>
                        {column.render("Header")}
                      </span>
                      {(column.render("Header") === "TIME (PRIOR TO CLASS)" ||
                        column.render("Header") === "LATE CANCEL" ||
                        column.render("Header") === "NO SHOW") && (
                        <InfoIcon id={styles.infoicon}></InfoIcon>
                      )}
                      <SortIcon id={styles.sorticon} />
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return <ManageClassTableRow key={row.id} row={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ManageClassTable;
