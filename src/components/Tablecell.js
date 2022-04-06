import { Checkbox } from "@mbkit/checkbox";
import { Input } from "@mbkit/input";
import styles from "./Tablerow.module.scss";
const Tablecell = (props) =>{ 

    
    const onChangeInputHandler =() =>{
    }
    const onChangeLateCancel =(event)=>{      
      props.setcheckedlatecancel(event.target.checked);
    }
    const onChangeNoShow =(event)=>{      
      
      props.setcheckednoshow(event.target.checked);      
    }    
    if(props.cell.column.id=="TIME")
    {      
      return <td id={styles.rowstyle}>
          <div className={styles.divstyle}>
            <Input id={styles.inputstyle} value={props.cell.value} onChange={onChangeInputHandler} />
            <span id={styles.spanstyle}>Minutes (Prior to class)</span>
          </div>
      </td>
    }
    else if(props.cell.column.id=="CHARGES_LC")
    {
      return (
        <td id={styles.rowstyle}>
      <Input id={styles.inputstyle} onChange={onChangeInputHandler} disabled={!props.checkedlatecancel}/>
      </td>
      )
    }
    else if(props.cell.column.id=="CHARGES_NS")
    {
      return (
        <td id={styles.rowstyle}>
          <Input id={styles.inputstyle} onChange={onChangeInputHandler} disabled={!props.checkednoshow} />
      </td>
      )
    }
    else if(props.cell.column.id=="LATE CANCEL")
    {
      return (
        <td id={styles.rowstyle}>
      <Checkbox checked={props.checkedlatecancel} onChange={onChangeLateCancel} disabled={props.checkednoshow}/>
      <span id={styles.spanenablestyle}>Enable</span>
      </td>
      )
    }
    else if(props.cell.column.id=="NO SHOW")
    {
      return (
        <td id={styles.rowstyle}>
      <Checkbox checked={props.checkednoshow} onChange={onChangeNoShow} disabled={props.checkedlatecancel}/>
      <span id={styles.spanenablestyle}>Enable</span>
      </td>
      )
    }
    else
    {
      return <td id={styles.rowstyle}>
        {props.cell.value}
      </td>
    }
    // return (
    //     <td id={styles.rowstyle}>
    //     {
    //     props.cell.column.Header == "TIME (PRIOR TO CLASS)" ? (
    //       <div className={styles.divstyle}>
    //         <Input id={styles.inputstyle} value={props.cell.value} onChange={onChangeInputHandler} />
    //         <span id={styles.spanstyle}>Minutes (Prior to class)</span>
    //       </div>
    //     ) : typeof props.cell.value == "boolean" ? (
    //       <Checkbox checked={checkedstate} onChange={onChangecheckboxHandler} />
    //     ) : (
    //       props.cell.column.Header=="CHARGES" ?(<Input id={styles.inputstyle} onChange={onChangeInputHandler} />):(props.cell.value)
    //     )
    //     }
    //   </td>   
    
};
export default Tablecell;