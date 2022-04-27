import { useMemo, useState } from "react";
import styles from "./styles/ManageAppointments.module.scss";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./columns";
import MOCK_DATA from "../../data/manageAppointments/MOCK_DATA.json";
import SortIcon from "@mui/icons-material/Sort";
import InfoIcon from "@material-ui/icons/Info";
import Tablerow from "./Tablerow";
import React from "react";
import { Tipsy } from "@mbkit/tipsy";
import { TipsyProps } from "@mbkit/tipsy/dist/cjs/Tipsy";
import { Input, Checkbox } from "@mui/material";
const ManageAppointments = () => {
  const [data, setData] = useState(MOCK_DATA);
  
const onLateCancelHandler = () => {
  // setIslateCancel(!isLateCancel);
  // setLateCancelChargeInput(0);
};
const onNoShowHandler = () => {
  // setIsNoShow(!isNoShow);
  // setNoShowChargeInput(0);
};
const checkValidity = (value: string): boolean => {
  for (let i = 0; i < value.length; i++) {
    if (!(value[i] >= "0" && value[i] <= "9")) return false;
  }
  return true;
};
const onTimeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (!checkValidity(event.target.value)) return;
  // setTimeInput(event.target.value);
};
const onLateCancelChargeHandler = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  if (!checkValidity(event.target.value)) return;
  // setLateCancelChargeInput(event.target.value);
};
const onNoShowChargeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (!checkValidity(event.target.value)) return;
  // setNoShowChargeInput(event.target.value);
};
  const COLUMNS= [
    {
      Header: "TYPE",
      accessor: "TYPE",
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
      accessor:"TIME",
      Cell: (value: number, row: any) => {                
        return (
          <input
          onChange={onTimeChangeHandler}
          type="string"
          value={value}            
          />
        )    
    }
    },
    {
      // Header: "LATE CANCEL",
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
      accessor:"LATECANCEL",
      Cell: (rowData: { LATECANCEL: boolean; }, rowIndex:  number) => {
          return (
            <input
              type="checkbox"
              checked={rowData.LATECANCEL}
              onClick={() => {
                const tmpData = [...data];
                tmpData[rowIndex].LATECANCEL = !tmpData[rowIndex].LATECANCEL;
                setData(tmpData);
              }}
            />
          )    
      }
    },
    {
      Header: "CHARGES",    
      accessor:"CHARGES_LC",
      Cell: (value: number, row: any) => {                
        return (
          <input
          onChange={onTimeChangeHandler}
          type="string"
          value={value}            
          />
        )    
    }
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
      accessor:"NOSHOW",
      Cell: (rowData: { NOSHOW: boolean; }, rowIndex:  number) => {
        return (
          <input
            type="checkbox"
            checked={rowData.NOSHOW}
            onClick={() => {
              const tmpData = [...data];
              tmpData[rowIndex].NOSHOW = !tmpData[rowIndex].NOSHOW;
              setData(tmpData);
            }}
          />
        )    
    }
    },
    {
      Header: "CHARGES",
      accessor:"CHARGES_NS",
      Cell: ({value}:{value:any}) => {
        return (
          <input
          onChange={onNoShowChargeHandler}
          // type="number"
          value={value}            
          />
        )    
    }
    },
  ];
  const columns = useMemo(() => processColumns(COLUMNS, data), [COLUMNS, data]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
      // initialRowStateAccessor: () => ({ nschecked: false }),
      // initialRowStateAccessor: () => ({ lcchecked: false })
    });
  return (
    <div id={styles.outerdiv}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}                  
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
      </table>
    </div>
  );
};
export default ManageAppointments;

function processColumns(
  COLUMNS: {
    Header: string | JSX.Element;
    accessor: String;
    Cell?: (originalRow: any, rowIndex: any) => any;
  }[],
  data: {
    id: number;
    TYPE: string;
    TIME: number;
    LATECANCEL: boolean;
    CHARGES_LC: number;
    NOSHOW: boolean;
    CHARGES_NS: number;
  }[]
): any {
  return COLUMNS;
}