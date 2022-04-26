import React, { useMemo, useState } from "react";
import { useTable, useSortBy } from "react-table";
import styles from "./styles/ManageClasses.module.scss";
import { COLUMNS } from "../../data/manageClasses/column";
import SortIcon from "@mui/icons-material/Sort";
import InfoIcon from "@mui/icons-material/Info";
import MOCK_DATA from "../../data/manageClasses/MOCK_DATA.json";
import ManageClassTableRow from "./ManageClassTableRow";
import { Tipsy, TipsyExamples } from "@mbkit/tipsy";

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
                      {column.render("Header") === "TIME (PRIOR TO CLASS)" && (
                        <Tipsy
                          position="top-center"
                          label={
                            <>
                              This is the time for cancelation before the class.
                              <br />
                              You can update this time from Cancelation Window
                            </>
                          }
                        >
                          <span>
                            <InfoIcon id={styles.infoicon} />
                          </span>
                        </Tipsy>
                      )}
                      {column.render("Header") === "LATE CANCEL" && (
                        <Tipsy
                          position="top-center"
                          label="Don't put anything critical to getting the task at hand complete in here"
                        >
                          <span>
                            <InfoIcon id={styles.infoicon} />
                          </span>
                        </Tipsy>
                      )}
                      {column.render("Header") === "NO SHOW" && (
                        <Tipsy
                          position="top-center"
                          label="Don't put anything critical to getting the task at hand complete in here"
                        >
                          <span>
                            <InfoIcon id={styles.infoicon} />
                          </span>
                        </Tipsy>
                      )}
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
