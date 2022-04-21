import React, { useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import styles from "./styles/ManageClasses.module.scss";
import { COLUMNS } from "../../data/manageClasses/column";
import SortIcon from "@mui/icons-material/Sort";
import InfoIcon from "@mui/icons-material/Info";
import MOCK_DATA from "../../data/manageClasses/MOCK_DATA.json";
import ManageClassTableRow from "./ManageClassTableRow";

const ManageClasses = () => {
  const data = useMemo(() => MOCK_DATA, []);
  const columns = useMemo(() => processColumns(COLUMNS, data), [COLUMNS, data]);
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
                return (
                  <th {...column.getHeaderProps()}>
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
            return <ManageClassTableRow key={i} row={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;

function processColumns(
  COLUMNS: { Header: string; accessor: string }[],
  data: {
    id: number;
    type_of_class: string;
    time_prior_to_class: number;
    late_cancel: boolean;
    late_cancel_charge: number;
    no_show: boolean;
    no_show_charge: number;
  }[]
): any {
  return COLUMNS;
}
