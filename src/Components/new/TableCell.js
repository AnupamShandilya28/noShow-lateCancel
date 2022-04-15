import React, { useState } from "react";
import { Checkbox } from "@mbkit/checkbox";
import styles from "./styles/ManageFeeWaived.module.scss";

const TableCell = (props) => {
  console.log(props.currentState.noShow, props.cell.row.id);
  if (props.cell.column.id === "no_show_checked") {
    return (
      <td>
        <Checkbox
          checked={props.currentState.noShow}
          onChange={() => props.currentState.changeNoShowCheckhandler()}
        />
        <span className={styles.tableCellSpan}>Enable</span>
      </td>
    );
  }
  if (props.cell.column.id === "late_cancel_checked") {
    return (
      <td>
        <Checkbox
          checked={props.currentState.lateCancel}
          onChange={() => props.currentState.changeLateCancelCheckhandler()}
        />
        <span className={styles.tableCellSpan}>Enable</span>
      </td>
    );
  }
  if (props.cell.column.id === "no_show_input") {
    return (
      <td>
        <input
          type="text"
          value={props.currentState.noShowInput}
          onChange={(e) =>
            props.currentState.changeNoShowInputhandler(e.target.value)
          }
          disabled={!props.currentState.noShow}
        />
        <span className={styles.tableCellSpan}>Times</span>
      </td>
    );
  }
  if (props.cell.column.id === "late_cancel_input") {
    return (
      <td>
        <input
          type="text"
          value={props.currentState.lateCancelInput}
          onChange={(e) =>
            props.currentState.changeLateCancelInputhandler(e.target.value)
          }
          disabled={!props.currentState.lateCancel}
        />
        <span className={styles.tableCellSpan}>Times</span>
      </td>
    );
  }
  return <td>{props.cell.value}</td>;
};

export default TableCell;
