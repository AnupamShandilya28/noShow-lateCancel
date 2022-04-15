import React, { useState } from "react";
import TableCell from "./TableCell";

const TableRow = (props) => {
  const [noShow, setNoShow] = useState(false);
  const [noShowInput, setNoShowInput] = useState("");
  const [lateCancel, setLateCancel] = useState(false);
  const [lateCancelInput, setLateCancelInput] = useState("");
  const changeNoShowCheckhandler = () => {
    setNoShow((previous) => !previous);
  };
  const changeLateCancelCheckhandler = () => {
    setLateCancel((previous) => !previous);
  };
  const changeNoShowInputhandler = (no_show_input) => {
    setNoShowInput(no_show_input);
  };
  const changeLateCancelInputhandler = (late_cancel_input) => {
    setLateCancelInput(late_cancel_input);
  };
  const currentState = {
    noShow,
    noShowInput,
    lateCancel,
    lateCancelInput,
    changeLateCancelCheckhandler,
    changeLateCancelInputhandler,
    changeNoShowCheckhandler,
    changeNoShowInputhandler,
  };
  return (
    <tr {...props.row.getRowProps()}>
      {props.row.cells.map((cell) => {
        return (
          <TableCell
            key={cell.row.id + cell.column.id}
            cell={cell}
            currentState={currentState}
          />
        );
      })}
    </tr>
  );
};

export default TableRow;
