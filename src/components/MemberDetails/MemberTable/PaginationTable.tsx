import React, { useState } from "react";
import { useTable, usePagination, useSortBy,useRowSelect } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./column";
import { useMemo } from "react";
import styles from "./BasicTable.module.scss";
import EntryRow from "./EntryRow";
import SettingsIcon from "@mui/icons-material/Settings";
import SortIcon from "@mui/icons-material/Sort";
import { Button } from "@mbkit/button";
//import classes from "./MemberTable.module.scss";

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, page, nextPage, previousPage,canNextPage, canPreviousPage, pageOptions, setPageSize, state, prepareRow } =
  useTable({
    autoResetPage: false,
    columns,
    data,
  }, useSortBy, usePagination);

  const {pageIndex, pageSize} = state;
  // console.log("Data", data);
  console.log("Page", page);
  console.log("Pagesize", pageSize);
  const [rowState, setRowState] = useState(page);
  console.log("Rowsss", rows);
  const rowUpdateHandler = (id: number) =>{
    // console.log("Index:", id);
    var id_string = id.toString();
    // console.log("Row:", rowState);
    var index = id
    setRowState((prevState)=>{
      console.log("Index2:", index);
      let newRow=prevState[index];
      console.log("newRow", newRow);
      newRow.original.Apply = !prevState[index].original.Apply;
      // return[...prevState]
      return[...prevState.slice(0, index),newRow, ...prevState.slice(index + 1)];
    });

    // console.log(id);
  }


  

  return (
    <>
    <table
      id={styles.main_table}
      {...getTableProps()}
      
      // className={styles.main_table}
    >
      <thead >
        {headerGroups.map((headerGroup) => (
          <tr className={styles.header_row} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th  {...column.getHeaderProps(column.getSortByToggleProps())}>
                <span >
                <label >{column.render("Header")}</label>
                {(column.render('Header') === "STATUS") && <img className={styles.info_icon} src="https://img.icons8.com/ios-glyphs/30/000000/info--v1.png"/>}
                {(column.render('Header') !== "NO-SHOW/LATE") && (column.render('Header') !== "") && <SortIcon id={styles.sort_icon} style={{color: '#BDBDBD'}}/>}
                {(column.render('Header') === "STATUS") && <div className={styles.settings_div}><SettingsIcon id={styles.settings_icon} style={{color: '#696C74'}}/></div>}
                
                </span>
                
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row);
          return <EntryRow row={row}
           onRowUpdate={rowUpdateHandler}
           />;
        })}
      </tbody>
    </table>
    <div className={styles.pagination}>
    <Button variant="secondary" onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</Button>
          <span className={styles.page_index}>
              Page{" "}
              <strong>{pageIndex+1} of {pageOptions.length}</strong>{" "}
          </span>
          <select value={pageSize} className={styles.select_page} onChange={e=> setPageSize(Number(e.target.value))}>
              {[10,15,20].map(pageSize =>(
                  <option key={pageSize} value={pageSize}>Show {pageSize} </option>
              ))}
          </select>
              
              <Button variant="secondary" onClick={()=>nextPage()} disabled={!canNextPage}>Next</Button>
          </div>
    </>
  );
};
