import { Checkbox } from "@mbkit/checkbox";
import { Input } from "@mbkit/input";
import { Tipsy } from "@mbkit/tipsy";
import InfoIcon from "@mui/icons-material/Info";
import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import styles from "./styles/ManageGeneral.module.scss";

const ManageGeneral: React.FC<{
  MOCK_DATA: any;
  MOCK_DATA1: any;
  setenableupdate: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  const COLUMNS = React.useMemo(
    () => [
      {
        Header: "TYPE",
        accessor: "type_of_class",
      },
      {
        Header: (
          <>
            <span>TIME (PRIOR TO CLASS)</span>
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
          </>
        ),
        accessor: "time_prior_to_class",
        Cell: (props: any) => {
          const cellIndex: number = props.row.original.id;
          const changeHandler = (event: any) => {
            if (!checkValidity(event.target.value)) return;
            setData(() => {
              const newArray = [...data];
              newArray[cellIndex - 1].time_prior_to_class = event.target.value;
              return newArray;
            });
          };
          return (
            <div className={styles.divstyle}>
              <Input
                id={styles.inputstyle}
                value={data[cellIndex - 1].time_prior_to_class.toString()}
                onChange={changeHandler}
              />
              <span id={styles.spanstyle}>Minutes (Prior to class)</span>
            </div>
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
        accessor: "late_cancel",
        Cell: (props: any) => {
          const cellIndex: number = props.row.original.id;
          const changeHandler = () => {
            setData(() => {
              const newArray = [...data];
              newArray[cellIndex - 1].late_cancel =
                !newArray[cellIndex - 1].late_cancel;
              if (newArray[cellIndex - 1].late_cancel === false) {
                newArray[cellIndex - 1].late_cancel_charge = "0";
              }
              return newArray;
            });
          };
          return (
            <div id={styles.rowstyle}>
              <Checkbox
                onChange={changeHandler}
                checked={props.value}
              ></Checkbox>
              <span id={styles.spanenablestyle}>Enable</span>
            </div>
          );
        },
      },
      {
        Header: (
          <>
            <span>CHARGES</span>
          </>
        ),
        accessor: "late_cancel_charge",
        Cell: (props: any) => {
          const cellIndex: number = props.row.original.id;
          return (
            <div>
              <Input
                id={styles.inputstyle}
                value={
                  // data[cellIndex - 1].late_cancel_charge.toString() === "0"
                  data[cellIndex - 1].late_cancel === false
                    ? ""
                    : data[cellIndex - 1].late_cancel_charge.toString()
                }
                onChange={(event) => {
                  if (!checkValidity(event.target.value)) return;
                  setData(() => {
                    const newArray = [...data];
                    newArray[cellIndex - 1].late_cancel_charge =
                      event.target.value;
                    return newArray;
                  });
                }}
                disabled={!data[cellIndex - 1].late_cancel}
              />
            </div>
          );
        },
      },
      {
        Header: (
          <>
            <span>NO SHOW</span>
            <Tipsy
              position="top-center"
              label={
                <>
                  If the consumer didn't cancel and was not present.
                  <br />
                  Apply the required charges.
                </>
              }
            >
              <span>
                <InfoIcon id={styles.infoicon} />
              </span>
            </Tipsy>
          </>
        ),
        accessor: "no_show",
        Cell: (props: any) => {
          const cellIndex: number = props.row.original.id;
          const changeHandler = () => {
            setData(() => {
              const newArray = [...data];
              newArray[cellIndex - 1].no_show =
                !newArray[cellIndex - 1].no_show;
              if (newArray[cellIndex - 1].no_show === false) {
                newArray[cellIndex - 1].no_show_charge = "0";
              }
              return newArray;
            });
          };
          return (
            <div>
              <Checkbox
                onChange={changeHandler}
                checked={props.value}
              ></Checkbox>
              <span id={styles.spanenablestyle}>Enable</span>
            </div>
          );
        },
      },
      {
        Header: (
          <>
            <span>CHARGES</span>
          </>
        ),
        accessor: "no_show_charge",
        Cell: (props: any) => {
          const cellIndex: number = props.row.original.id;
          return (
            <div>
              <Input
                id={styles.inputstyle}
                value={
                  // data[cellIndex - 1].no_show_charge.toString() === "0"
                  data[cellIndex - 1].no_show === false
                    ? ""
                    : data[cellIndex - 1].no_show_charge.toString()
                }
                onChange={(event) => {
                  if (!checkValidity(event.target.value)) return;
                  setData(() => {
                    const newArray = [...data];
                    newArray[cellIndex - 1].no_show_charge = event.target.value;
                    return newArray;
                  });
                }}
                type="text"
                disabled={!data[cellIndex - 1].no_show}
              />
            </div>
          );
        },
      },
    ],
    []
  );

  const [data, setData] = useState(props.MOCK_DATA);

  const prevData = props.MOCK_DATA1;

  const isEqual = (...objects: any[]) =>
    objects.every((obj) => JSON.stringify(obj) === JSON.stringify(objects[0]));

  useEffect(() => {
    if (!isEqual(data, prevData)) {
      props.setenableupdate(true);
    } else {
      props.setenableupdate(false);
    }
  }, [data]);

  const columns = useMemo(() => processColumns(COLUMNS, data), [COLUMNS, data]);
  const tableInstance = useTable({
    columns,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div id={styles.outerdiv}>
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
                    <td id={styles.rowstyle} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
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

export default ManageGeneral;

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
    type_of_class: string;
    time_prior_to_class: string;
    late_cancel: boolean;
    late_cancel_charge: string;
    no_show: boolean;
    no_show_charge: string;
  }[]
): any {
  return COLUMNS;
}

const checkValidity = (value: string): boolean => {
  for (let i = 0; i < value.length; i++) {
    if (!(value[i] >= "0" && value[i] <= "9")) return false;
  }
  return true;
};
