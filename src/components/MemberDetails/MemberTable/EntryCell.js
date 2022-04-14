//import styles from "../Redundant/MemberEntry.module.scss";
import styles from "./EntryCell.module.scss";
import { Checkbox } from "@mbkit/checkbox";
import { useState, useEffect } from "react";

const EntryCell = (props) =>{

  const [isCheck, setIsCheck] = useState(props.cell.row.original.Apply);
  const isCheckHandler = () => {
    setIsCheck(!isCheck);
  };
    
   
    if(props.cell.column.id==="Name")
    {      
      return (<td {...props.cell.getCellProps()} className={styles.entry_name}>
          <div className={styles.name_div}>
            <label className={styles.name_label}>{props.cell.render('Cell')}</label>
          </div>
      </td>)
    }
    else if(props.cell.column.id==="Class"){
        return(<td {...props.cell.getCellProps()} className={styles.entry_class}>
            <div >
              <label className={styles.class_label}>{props.cell.render('Cell')}</label>
            </div>
          </td>)
    }
    else if(props.cell.column.id==="Date"){
        return(<td {...props.cell.getCellProps()} className={styles.entry_date}>
            <div >
            <label className={styles.date_label}>{props.cell.render('Cell')}</label>
          </div>
          </td>)
    }
    else if(props.cell.column.id==="Pricing"){
        return(<td {...props.cell.getCellProps()} className={styles.entry_pricing}>
            <div >
            <label className={styles.pricing_label}>{props.cell.render('Cell')}</label>
          </div>
          </td>)
    }
    else if(props.cell.column.id==="Cancel"){
        return(<td {...props.cell.getCellProps()} className={styles.entry_cancel}>
            <div >
            <label className={styles.cancel_label}>{props.cell.render('Cell')}</label>
          </div>
          </td>)
    }
    else if(props.cell.column.id==="Waive"){
        return(<td {...props.cell.getCellProps()} className={styles.entry_waive}>
            <div className={styles.charges_div}>
            <label className={styles.cancel_label}>{props.cell.render('Cell')}</label>
          </div>
          </td>)
    }
    else if(props.cell.column.id==="Charges"){
        return(<td {...props.cell.getCellProps()} className={styles.entry_charges}>
            <div className={styles.charges_div} >
            <label className={styles.charges_label}>${props.cell.render('Cell')}</label>
          </div>
          </td>)
    }
    else if(props.cell.column.id==="Type"){
        

        
        return(<td {...props.cell.getCellProps()} className={styles.entry_type}>
            <div className={styles.type_div}>
            <Checkbox
              onChange={isCheckHandler}
              checked={isCheck}
            />
            <label className={styles.type_label}>{props.cell.render('Cell')}</label>
          </div>
          </td>)
    }
    else
    {
      return <td >
        
      </td>
    }
}

export default EntryCell;