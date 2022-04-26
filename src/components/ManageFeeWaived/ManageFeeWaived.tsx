import { useTable } from "react-table";
import MOCK_DATA from "../../data/manageFeeWaived/MOCK_DATA.json";
import { COLUMNS } from "./columns";
import styles from "./styles/ManageFeeWaived.module.scss";
import React, { useMemo } from "react";
import SortIcon from "@mui/icons-material/Sort";
import InfoIcon from "@mui/icons-material/Info";
import TableRow from "./TableRow";
import { Tipsy, TipsyExamples } from "@mbkit/tipsy";

const ManageFeeWaived = () => {
  const data = useMemo(() => MOCK_DATA, []);
  const columns = useMemo(() => processColumns(COLUMNS, data), [COLUMNS, data]);
  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div className={styles.table}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
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
                  {column.render("Header") === "FEE WAIVED" && (
                    <Tipsy
                      position="top-center"
                      label="Don't put anything critical to getting the task at hand complete in here"
                    >
                      <span>
                        <InfoIcon id={styles.infoicon} />
                      </span>
                    </Tipsy>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return <TableRow row={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFeeWaived;

function processColumns(
  COLUMNS: { Header: string; accessor: string }[],
  data: {
    id: number;
    membership: string;
    no_show_checked: boolean;
    no_show_input: number;
    late_cancel_checked: boolean;
    late_cancel_input: number;
  }[]
): any {
  return COLUMNS;
}
