import { Fragment, useMemo } from "react";
import styles from "./ManageAppointments.module.scss"
import {useTable,useSortBy} from 'react-table'
import { COLUMNS } from "./columns";
import MOCK_DATA from '../MOCK_DATA.json'
import SortIcon from '@mui/icons-material/Sort';
const ManageAppointments =() =>{
    const columns=useMemo(()=> COLUMNS,[])
    const data=useMemo(()=>MOCK_DATA,[])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    }=useTable({
      columns: columns,
      data: data
  },
  useSortBy
  )
    return (  
      <div>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (              
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span >
                  <SortIcon id={styles.sorticon}/>
                </span>
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
    )
}
export default ManageAppointments;