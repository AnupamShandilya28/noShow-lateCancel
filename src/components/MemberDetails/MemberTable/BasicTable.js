import React, { useContext, useState, useEffect } from "react";
import { Column, useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./column";
import { useMemo } from "react";
import styles from "./BasicTable.module.scss";
import EntryRow from "./EntryRow";
import SettingsIcon from "@mui/icons-material/Settings";
import SortIcon from "@mui/icons-material/Sort";
import FlyoutContext from "../../store/flyout-context";
// import { useEffect } from "@storybook/addons";
import FlyoutColumns from "../FlyoutColumns/FlyoutColumns";
//import classes from "./MemberTable.module.scss";

//:React.FC<{onFlyoutShow(arg: boolean): void}> =
export const BasicTable = (props) => {
  const [showFlyout, setShowFlyout] = useState(false);
  const [isShowFlyoutTouched, setIsShowFlyoutTouched] = useState(false);

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

  const checkColumnHandler = (itemId, itemValue) => {
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

  const flyoutCtx = useContext(FlyoutContext);
  const data = useMemo(() => MOCK_DATA, []);

  // const [columnsT, setColumnsT] = useState(COLUMNS);

  const columns = useMemo(() => COLUMNS, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  useEffect(() => {
    // const tempArray = [];
    // flyoutCtx.columnList.map(column => {
    //   if(column.isChecked === true){
    //     tempArray.push(COLUMNS[column.id]);

    //   }
    // })
    // console.log(tempArray);
    const tempArray = [];
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
    setHiddenColumns(tempArray.map((item) => item.accessor));
  }, [showColumns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setHiddenColumns,
  } = tableInstance;

  const flyoutClickHandler = () => {
    console.log("Flyout clicked...");
    setShowFlyout(() => {
      return !showFlyout;
    });
    // props.onFlyoutShow(showFlyout);
  };

  return (
    <div className={styles.main_div}>
      <div>
        <table
          id={styles.main_table}
          {...getTableProps()}
          className={styles.main_table}
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
                  } else if (tempClass === "STATUS") {
                    tempClassName = styles.STATUS;
                  }

                  return (
                    <th className={tempClassName} {...column.getHeaderProps()}>
                      <span>
                        <label>{column.render("Header")}</label>
                        {column.render("Header") === "STATUS" && (
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
                        {column.render("Header") === "STATUS" && (
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
            {rows.map((row) => {
              prepareRow(row);
              return <EntryRow row={row} />;
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.flyout_div}>
        {showFlyout && (
        <FlyoutColumns columns={showColumns} onCheck={checkColumnHandler} />
        )}
      </div>
    </div>
  );
};
