import { Fragment, useMemo, useState } from "react";
import styles from "./styles/ManageAppointments.module.scss"
import {useTable,useSortBy} from 'react-table';
import { COLUMNS } from "./columns";
import MOCK_DATA from '../../data/manageAppointments/MOCK_DATA.json'
import SortIcon from '@mui/icons-material/Sort';
import InfoIcon from '@material-ui/icons/Info';
import Tablerow from "./Tablerow";
import React from "react";
import { Tipsy, TipsyExamples } from "@mbkit/tipsy";
const ManageAppointments =() =>{  
    const data=useMemo(()=>MOCK_DATA,[])    
    const columns = useMemo(() => processColumns(COLUMNS, data), [COLUMNS, data]);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    }=useTable({
       columns,
       data,
      // initialRowStateAccessor: () => ({ nschecked: false }),
      // initialRowStateAccessor: () => ({ lcchecked: false })
  }
  )
    return (
      <div id={styles.outerdiv}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                    {column.render("Header") === "TIME (PRIOR TO CLASS)" && (
                      <Tipsy
                        position="top-center"
                        label={
                          <>
                            This is the time for cancelation before the class.
                            <br />
                            You can update this time from Cancelation Window"
                          </>
                        }
                      >
                        <span>
                          <InfoIcon id={styles.infoicon} />
                        </span>
                      </Tipsy>
                    )}
                    {column.render("Header") === "NO SHOW" && (
                      <Tipsy
                      position="top-center"
                      label={
                        <>
                          This is the time for cancelation before the class.
                          <br />
                          You can update this time from Cancelation Window"
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
                    {(column.render("Header") === "TIME (PRIOR TO CLASS)" ||
                      column.render("Header") === "TYPE") && (
                      <span>
                        <SortIcon id={styles.sorticon} />
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return <Tablerow key={i} row={row} />;
            })}
          </tbody>
        </table>
      </div>
    );
}
export default ManageAppointments;

function processColumns(
  COLUMNS: { Header: string; accessor: string }[],
  data: {
    id: number;
    TYPE: string;
    TIME: number;
    LATECANCEL: boolean;
    CHARGES_LC: number;
    NOSHOW: boolean;
    CHARGES_NS:number;
  }[]
): any {  
  return COLUMNS;
}
