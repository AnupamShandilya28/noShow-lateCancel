import { useTable } from "react-table";
import MOCK_DATA from "./API/MOCK_DATA.json";
import { COLUMNS } from "./API/columns";
import styles from "./styles/ManageFeeWaived.module.scss";
import React, { useMemo } from "react";
import SortIcon from "@mui/icons-material/Sort";
import InfoIcon from "@mui/icons-material/Info";
import TableRow from "./TableRow";

const ManageFeeWaived = () => {
  //const columns = useMemo(() => COLUMNS, []);
  //console.log("Hi")
  const data = useMemo(() => MOCK_DATA, []);
  const columns = useMemo(() => processColumns(COLUMNS, data), [COLUMNS, data]);
  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
                {(column.render("Header") === "NO SHOW" ||
                  column.render("Header") === "LATE CANCEL" ||
                  column.render("Header") === "FEE WAIVED") && (
                  <span>
                    <InfoIcon id={styles.infoicon} />
                  </span>
                )}
                <span>
                  <SortIcon id={styles.sorticon} />
                </span>
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
  //throw new Error("Function not implemented.");
  return COLUMNS;
}
