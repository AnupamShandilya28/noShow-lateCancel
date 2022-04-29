import React, { useState, useEffect, useContext } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useRowSelect,
  Column,
  useFilters,
} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./column";
import { useMemo } from "react";
import styles from "./BasicTable.module.scss";
import SettingsIcon from "@mui/icons-material/Settings";
import SortIcon from "@mui/icons-material/Sort";
import { Button } from "@mbkit/button";
import classes from "./EntryCell.module.scss";
import FilterTableContext from "../../store/filter-table-context";
import SearchMember from "../SearchMember";
import { Toaster, ToasterExample } from "@mbkit/toaster";
import Header from "../Header";
import ApplyChargesModal from "../../UI/ApplyChargesModal";
import CheckEnableContext from "../../store/check-enable-context";
import FlyoutColumns from "../FlyoutColumns/FlyoutColumns";

export const PaginationTable = () => {
  const [showFlyout, setShowFlyout] = useState(false);

  const [isApply, setIsApply] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isTouchedConfirm, setIsTouchedConfirm] = useState(false);
  // const [isShowFlyout, setIsShowFlyout] = useState(false);

  const enableCtx = useContext(CheckEnableContext);

  useEffect(() => {
    setTimeout(() => {
      setIsTouchedConfirm(false);
    }, 3000);
  }, [isConfirmed]);

  const showApplyHandler = () => {
    setIsApply(true);
  };

  const confirmHandler = (status: boolean) => {
    setIsTouchedConfirm(true);
    setIsConfirmed(status);
    setIsApply(false);
    console.log(status);

    enableCtx.isCheckEnabled = status;
    console.log(enableCtx.isCheckEnabled);
  };
  const [data, setData] = useState(MOCK_DATA);
  const columns = useMemo(() => COLUMNS, []);

  const filterCtx = useContext(FilterTableContext);

  const rowUpdateHandler = (id: number) => {
    console.log("Index:", id);
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

    console.log("id--", id);
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
    allColumns,
    getToggleHideAllColumnsProps,
    setHiddenColumns,
    setFilter
  } = useTable(
    {
      columns,
      data,
      rowUpdateHandler,
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize } = state;
  console.log("Data", data);

  const flyoutClickHandler = () => {
    console.log("Flyout clicked...");
    setShowFlyout(() => {
      return !showFlyout;
    });
  };

  const filterHandler = () => {
    const filterString = filterCtx.filterValue;
    setFilter("Name", filterString);
  }

  var style_dict: any = {Name: [styles.NAME, classes.entry_name] ,
    Class : [styles.CLASSES,classes.entry_class],
    Date : [styles.DATE, classes.entry_date],
    Pricing : [styles.PRICING, classes.entry_pricing],
    Cancel : [styles.CANCEL, classes.entry_cancel],
    Waive : [styles.WAIVED, classes.entry_waive],
    Charges : [styles.CHARGES,classes.entry_charges],
    Type: [styles.STATUS, classes.entry_type]
  }

  return (
    <div className={styles.member_details_page}>
      {isApply && (
        <ApplyChargesModal
          onConfirm={confirmHandler}
          onClose={() => setIsApply(false)}
        />
      )}
      {isConfirmed && isTouchedConfirm && (
        <Toaster className={styles.toaster} show={true}>
          <label className={styles.t_text}>Charges applied successfully</label>
        </Toaster>
      )}
      <SearchMember onApplyFilter={filterHandler} />
      <Header onApply={showApplyHandler} />
      <div className={styles.main_table}>
        <div className={styles.main_div}>
          <div>
            <table
              id={styles.main_table}
              {...getTableProps()}
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr
                    className={styles.header_row}
                    {...headerGroup.getHeaderGroupProps()}
                  >
                    {headerGroup.headers.map((column) => {
                      const tempClass = column.render("Header");
                      var tempClassName = style_dict[column.id][0];
                      return (
                        <th
                          className={tempClassName}
                          {...column.getHeaderProps()}
                        >
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
                  // console.log("row----", row);

                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        var tempClassName = style_dict[cell.column.id][1];
                        return (
                          <td
                            className={tempClassName}
                            {...cell.getCellProps()}
                          >
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
                columns={allColumns}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
