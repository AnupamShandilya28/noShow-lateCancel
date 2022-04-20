import { Checkbox } from "@mbkit/checkbox";
import { Input } from "@mbkit/input";
import React from "react";
import { SetStateAction, useState } from "react";
import styles from "./Tablerow.module.scss";
const Tablecell: React.FC<{
  setcheckedlatecancel: (arg0: boolean) => void;
  setcheckednoshow: (arg0: boolean) => void;
  setinputvalueLC: (arg0: string) => void;
  setinputvalueNS: (arg0: string) => void;
  cell: { column: { id: string }; value: string };
  checkedlatecancel: boolean;
  checkednoshow: boolean;
  inputvalueLC: string;
  inputvalueNS:string;
}> = (props) => {
  const [inputvalue, setinputvalue] = useState("");

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setinputvalue(event.target.value);
  };
  const onChangeInputHandlerLC = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setinputvalueLC(event.target.value);
  };
  const onChangeInputHandlerNS = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.setinputvalueNS(event.target.value);
  };
  const onChangeLateCancel = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setinputvalueLC("");
    props.setcheckedlatecancel(event.target.checked);
  };
  const onChangeNoShow = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setinputvalueNS("");

    props.setcheckednoshow(event.target.checked);
  };
  if (props.cell.column.id == "TIME") {
    return (
      <td id={styles.rowstyle}>
        <div className={styles.divstyle}>
          <Input
            id={styles.inputstyle}
            value={props.cell.value}
            onChange={onChangeInputHandler}
          />
          <span id={styles.spanstyle}>Minutes (Prior to class)</span>
        </div>
      </td>
    );
  } else if (props.cell.column.id == "CHARGES_LC") {
    return (
      <td id={styles.rowstyle}>
        <Input
          id={styles.inputstyle}
          onChange={onChangeInputHandlerLC}
          disabled={!props.checkedlatecancel}
          value={props.inputvalueLC}
        />
      </td>
    );
  } else if (props.cell.column.id == "CHARGES_NS") {
    return (
      <td id={styles.rowstyle}>
        <Input
          id={styles.inputstyle}
          onChange={onChangeInputHandlerNS}
          disabled={!props.checkednoshow}
          value={props.inputvalueNS}
        />
      </td>
    );
  } else if (props.cell.column.id == "LATE CANCEL") {
    return (
      <td id={styles.rowstyle}>
        <Checkbox
          checked={props.checkedlatecancel}
          onChange={onChangeLateCancel}
        />
        <span id={styles.spanenablestyle}>Enable</span>
      </td>
    );
  } else if (props.cell.column.id == "NO SHOW") {
    return (
      <td id={styles.rowstyle}>
        <Checkbox checked={props.checkednoshow} onChange={onChangeNoShow} />
        <span id={styles.spanenablestyle}>Enable</span>
      </td>
    );
  } else {
    return <td id={styles.rowstyle}>{props.cell.value}</td>;
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