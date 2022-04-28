import { useTable } from "react-table";
import MOCK_DATA from "../../data/manageFeeWaived/MOCK_DATA.json";
import styles from "./styles/ManageFeeWaived.module.scss";
import React, { useMemo, useState, useCallback, useEffect } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Tipsy, TipsyExamples } from "@mbkit/tipsy";
import { Checkbox } from "@mbkit/checkbox";

const ManageFeeWaived = () => {
  const COLUMNS = React.useMemo(
    () => [
      {
        Header: "TYPE",
        accessor: "membership",
      },
      {
        Header: (
          <>
            <span>NO SHOW</span>
            <Tipsy
              position="top-center"
              label="Don't put anything critical to getting the task at hand complete in here"
            >
              <span>
                <InfoIcon id={styles.infoicon} />
              </span>
            </Tipsy>
          </>
        ),
        accessor: "no_show_checked",
        Cell: (props: any) => {
          const cellIndex: number = props.row.original.id;
          const changeHandler = () => {
            setData(() => {
              const newArray = [...data];
              newArray[cellIndex - 1].no_show_checked =
                !newArray[cellIndex - 1].no_show_checked;
              return newArray;
            });
          };
          return (
            <>
              <Checkbox checked={props.value} onChange={changeHandler} />
              <span className={styles.tableCellSpan}>Enable</span>
            </>
          );
        },
      },
      {
        Header: (
          <>
            <span>FEE WAIVED</span>
            <Tipsy
              position="top-center"
              label="Don't put anything critical to getting the task at hand complete in here"
            >
              <span>
                <InfoIcon id={styles.infoicon} />
              </span>
            </Tipsy>
          </>
        ),
        accessor: "no_show_input",
        Cell: (props: any) => {
          const cellIndex: number = props.row.original.id;
          return (
            <>
              <input
                type="text"
                value={data[cellIndex - 1].no_show_input}
                onChange={(e) => {
                  if (!checkIfValid(e.target.value)) return;
                  setData(() => {
                    const newArray = [...data];
                    newArray[cellIndex - 1].no_show_input = e.target.value;
                    return newArray;
                  });
                }}
                disabled={!data[cellIndex - 1].no_show_checked}
              />
              <span className={styles.tableCellSpan}>Times</span>
            </>
          );
        },
      },
      {
        Header: (
          <>
            <span>LATE CANCEL</span>
            <Tipsy
              position="top-center"
              label="Don't put anything critical to getting the task at hand complete in here"
            >
              <span>
                <InfoIcon id={styles.infoicon} />
              </span>
            </Tipsy>
          </>
        ),
        accessor: "late_cancel_checked",
        Cell: (props: any) => {
          const cellIndex: number = props.row.original.id;
          const changeHandler = () => {
            setData(() => {
              const newArray = [...data];
              newArray[cellIndex - 1].late_cancel_checked =
                !newArray[cellIndex - 1].late_cancel_checked;
              return newArray;
            });
          };
          return (
            <>
              <Checkbox checked={props.value} onChange={changeHandler} />
              <span className={styles.tableCellSpan}>Enable</span>
            </>
          );
        },
      },
      {
        Header: (
          <>
            <span>FEE WAIVED</span>
            <Tipsy
              position="top-center"
              label="Don't put anything critical to getting the task at hand complete in here"
            >
              <span>
                <InfoIcon id={styles.infoicon} />
              </span>
            </Tipsy>
          </>
        ),
        accessor: "late_cancel_input",
        Cell: (props: any) => {
          const cellIndex: number = props.row.original.id;
          return (
            <>
              <input
                type="text"
                value={data[cellIndex - 1].late_cancel_input}
                onChange={(e) => {
                  if (!checkIfValid(e.target.value)) return;
                  setData(() => {
                    const newArray = [...data];
                    newArray[cellIndex - 1].late_cancel_input = e.target.value;
                    return newArray;
                  });
                }}
                disabled={!data[cellIndex - 1].late_cancel_checked}
              />
              <span className={styles.tableCellSpan}>Times</span>
            </>
          );
        },
      },
    ],
    []
  );

  const [data, setData] = useState(MOCK_DATA);
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
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFeeWaived;

function processColumns(
  COLUMNS: (
    | {
        Header: string;
        accessor: string;
      }
    | {
        Header: JSX.Element;
        accessor: string;
      }
  )[],
  data: {
    id: number;
    membership: string;
    no_show_checked: boolean;
    no_show_input: string;
    late_cancel_checked: boolean;
    late_cancel_input: string;
  }[]
): any {
  return COLUMNS;
}

function checkIfValid(input: string) {
  for (const ch of input) {
    if (!(ch > "0" && ch <= "9")) return false;
  }
  return true;
}
