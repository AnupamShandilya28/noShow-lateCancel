import { Checkbox } from "@mbkit/checkbox";
import { Input } from "@mbkit/input";
import styles from "./Tablerow.module.scss";
const Tablerow = (props) =>{
    const onChangeInputHandler =() =>{

    }
    const onChangecheckboxHandler =()=>{

    }
    // {...props.cell.getCellProps()}
    return (
        <td id={styles.rowstyle}>
        {
        props.cell.column.Header == "TIME (PRIOR TO CLASS)" ? (
          <div className={styles.divstyle}>
            <Input id={styles.inputstyle} value={props.cell.value} onChange={onChangeInputHandler} />
            <span id={styles.spanstyle}>Minutes (Prior to class)</span>
          </div>
        ) : typeof props.cell.value == "boolean" ? (
          <Checkbox checked={props.cell.value} onChange={onChangecheckboxHandler} />
        ) : (
          props.cell.column.Header=="CHARGES" ?(<Input id={styles.inputstyle} onChange={onChangeInputHandler} />):(props.cell.value)
        )}
      </td>
    );
};
export default Tablerow;