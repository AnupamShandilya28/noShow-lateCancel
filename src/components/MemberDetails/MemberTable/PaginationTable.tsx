import React, { useState, useEffect } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useRowSelect,
  Column,
} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./column";
import { useMemo } from "react";
import styles from "./BasicTable.module.scss";
import EntryRow from "./EntryRow";
import SettingsIcon from "@mui/icons-material/Settings";
import SortIcon from "@mui/icons-material/Sort";
import { Button } from "@mbkit/button";
import FlyoutColumns from "../FlyoutColumns/FlyoutColumns";
import { TableColumns } from "./column";
import classes from "./EntryCell.module.scss";
//import classes from "./MemberTable.module.scss";

export const PaginationTable = () => {
  const [showFlyout, setShowFlyout] = useState(false);

  const [showColumns, setShowColumns] = useState([
    { id: "Name", value: "Name", isChecked: true },
    { id: "Class", value: "Classes", isChecked: true },
    { id: "Date", value: "Date", isChecked: true },
    { id: "Pricing", value: "Pricing", isChecked: true },
    { id: "Cancel", value: "No show/late", isChecked: true },
    { id: "Waive", value: "Fee waived", isChecked: true },
    { id: "Charges", value: "Charges", isChecked: true },
    { id: "Type", value: "Status", isChecked: true },
    // { id: 9, value: "Cancellation time", isChecked: false },
    // { id: 10, value: "Credit card status", isChecked: false },
    // { id: 11, value: "Staff Name", isChecked: false },
  ]);

  const [columns, setColumns] = useState(COLUMNS);
  const [data, setData] = useState(MOCK_DATA);
  const [skipPageReset, setSkipPageReset] = useState(false);

  const rowUpdateHandler = (id: number) => {
    setSkipPageReset(true);
    console.log("Index:", id);
    // var id_string = id.toString();
    // console.log("Row:", rowState);
    var index = id;
    setData((prevState) => {
      // console.log("Index2:", index);
      let newRow = prevState[index];
      newRow.Apply = !prevState[index].Apply;
      // return[...prevState]
      return [
        ...prevState.slice(0, index),
        newRow,
        ...prevState.slice(index + 1),
      ];
    });

    console.log(id);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    state,
    prepareRow,
    setHiddenColumns,
  } = useTable(
    {
      columns,
      data,
      autoResetPage: !skipPageReset,
      rowUpdateHandler,
    },
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize } = state;
  console.log("Data", data);
  // console.log(page[0].original.Apply);

  React.useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  // const tableUpdateHandler = () => {
  //   setData((prevState) => {
  //     return prevState;
  //   });
  // };

  const checkColumnHandler = (itemId: string, itemValue: string) => {
    console.log("Handler");
    var index = showColumns.findIndex((x) => x.id === itemId);
    console.log("index: ", index);
    setShowColumns((prevArray) => {
      let newCheck = prevArray[index];
      newCheck.isChecked = !prevArray[index].isChecked;
      console.log(newCheck);
      return [
        ...prevArray.slice(0, index),
        newCheck,
        ...prevArray.slice(index + 1),
      ];
    });
    // console.log("chekced",showColumns[index].isChecked);
    // flyoutCtx.columnList = showColumns;
  };

  useEffect(() => {
    const tempArray: Array<Column<TableColumns>> = [];
    showColumns.map((column) => {
      if (column.isChecked === false) {
        const objectArray = COLUMNS.filter((x) => x.accessor === column.id);
        console.log("Object", objectArray);
        tempArray.push(objectArray[0]);
      }
    });
    console.log("temparray", tempArray);
    console.log("COLUMN", COLUMNS);
    // setColumnsT(tempArray);
    console.log("effect");
    // console.log(columns);
    setHiddenColumns(tempArray.map((item) => item.accessor!.toString()));
  }, [showColumns]);

  const flyoutClickHandler = () => {
    console.log("Flyout clicked...");
    setShowFlyout(() => {
      return !showFlyout;
    });
  };

  return (
    <div className={styles.main_div}>
      <div>
        <table
          id={styles.main_table}
          {...getTableProps()}

          // className={styles.main_table}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                className={styles.header_row}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => {
                  const tempClass = column.render("Header");
                  var tempClassName;
                  if (tempClass === "NAME") {
                    tempClassName = styles.NAME;
                  } else if (tempClass === "CLASSES / APPOINTMENTS") {
                    tempClassName = styles.CLASSES;
                  } else if (tempClass === "DATE & TIME") {
                    tempClassName = styles.DATE;
                  } else if (tempClass === "PRICING OPTION") {
                    tempClassName = styles.PRICING;
                  } else if (tempClass === "NO-SHOW/LATE") {
                    tempClassName = styles.CANCEL;
                  } else if (tempClass === "FEE WAIVED") {
                    tempClassName = styles.WAIVED;
                  } else if (tempClass === "CHARGES") {
                    tempClassName = styles.CHARGES;
                  } else if (tempClass === "FEE TYPE") {
                    tempClassName = styles.STATUS;
                  }
                  return (
                    <th className={tempClassName} {...column.getHeaderProps()}>
                      <span>
                        <label {...column.getSortByToggleProps()}>
                          {column.render("Header")}
                        </label>
                        {column.render("Header") === "FEE TYPE" && (
                          <img
                            className={styles.info_icon}
                            src="https://img.icons8.com/ios-glyphs/30/000000/info--v1.png"
                          />
                        )}
                        {column.render("Header") !== "NO-SHOW/LATE" &&
                          column.render("Header") !== "" && (
                            <SortIcon
                              id={styles.sort_icon}
                              style={{ color: "#BDBDBD" }}
                            />
                          )}
                        {column.render("Header") === "FEE TYPE" && (
                          <div className={styles.settings_div}>
                            <SettingsIcon
                              onClick={flyoutClickHandler}
                              id={styles.settings_icon}
                              style={{ color: "#696C74" }}
                            />
                          </div>
                        )}
                      </span>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    // {console.log("ROWWWW CELL", cell.column.Header)}
                  const tempClass = cell.column.Header;
                  var tempClassName;
                  if (tempClass === "NAME") {
                    tempClassName = classes.entry_name;
                  } else if (tempClass === "CLASSES / APPOINTMENTS") {
                    tempClassName = classes.entry_class;
                  } else if (tempClass === "DATE & TIME") {
                    tempClassName = classes.entry_date;
                  } else if (tempClass === "PRICING OPTION") {
                    tempClassName = classes.entry_pricing;
                  } else if (tempClass === "NO-SHOW/LATE") {
                    tempClassName = classes.entry_cancel;
                  } else if (tempClass === "FEE WAIVED") {
                    tempClassName = classes.entry_waive;
                  } else if (tempClass === "CHARGES") {
                    tempClassName = classes.entry_charges;
                  } else if (tempClass === "FEE TYPE") {
                    tempClassName = classes.entry_type;
                  }
                    return (
                      <td className={tempClassName} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={styles.pagination}>
          <Button
            variant="secondary"
            className={styles.pagination_button}
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </Button>
          <span className={styles.page_index}>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <select
            value={pageSize}
            className={styles.select_page}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 15, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}{" "}
              </option>
            ))}
          </select>

          <Button
            className={styles.pagination_button}
            variant="secondary"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </Button>
        </div>
      </div>
      <div className={styles.flyout_div}>
        {showFlyout && (
          <FlyoutColumns
            // onRowUpdate={tableUpdateHandler}
            columns={showColumns}
            onCheck={checkColumnHandler}
          />
        )}
      </div>
    </div>
  );
};
