import { Fragment, useMemo, useState } from "react";
import styles from "./ManageAppointments.module.scss"
import {useTable,useSortBy} from 'react-table'
import { COLUMNS } from "./columns";
import MOCK_DATA from '../MOCK_DATA.json'
import SortIcon from '@mui/icons-material/Sort';
import InfoIcon from '@material-ui/icons/Info';
import Tablerow from "./Tablerow";
const ManageAppointments =() =>{
  // const [checkedlatecancel,setcheckedlatecancel]=useState(false);
  // const [checkednoshow,setcheckednoshow]=useState(false);        
  // const [reload,setreload]=useState(false);
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
      data: data,
      // initialRowStateAccessor: () => ({ nschecked: false }),
      // initialRowStateAccessor: () => ({ lcchecked: false })
  },
  useSortBy  
  )
    return (  
    <div id="scrolll">
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (              
              <th id={column.render('Header')} {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {(column.render('Header')==="TIME (PRIOR TO CLASS)" || column.render('Header')==="NO SHOW") && <span>
                  <InfoIcon id={styles.infoicon}/>
                  </span>}                
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
          prepareRow(row);          
          return (
            <Tablerow row={row} />
          )          
        })}
      </tbody>
    </table>    
    </div>    
    )
}
export default ManageAppointments;