import React, { useState } from "react";
import TableCell from "./TableCell";

const TableRow = (props: {
  row: {
    getRowProps: () => JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLTableRowElement> &
      React.HTMLAttributes<HTMLTableRowElement>;
    cells: {
      row: { id: string };
      column: { id: string };
      value:
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
    }[];
  };
}) => {
  const [noShow, setNoShow] = useState(false);
  const [noShowInput, setNoShowInput] = useState("");
  const [lateCancel, setLateCancel] = useState(false);
  const [lateCancelInput, setLateCancelInput] = useState("");
  const changeNoShowCheckhandler = () => {
    setNoShow((previous) => {
      if (previous) changeNoShowInputhandler("");
      return !previous;
    });
  };
  const changeLateCancelCheckhandler = () => {
    setLateCancel((previous) => {
      if (previous) changeLateCancelInputhandler("");
      return !previous;
    });
  };
  const changeNoShowInputhandler = (no_show_input: string) => {
    for (let i = 0; i < no_show_input.length; i++) {
      if (!(no_show_input[i] >= "0" && no_show_input[i] <= "9")) return;
    }
    setNoShowInput(no_show_input);
  };
  const changeLateCancelInputhandler = (late_cancel_input: string) => {
    for (let i = 0; i < late_cancel_input.length; i++) {
      if (!(late_cancel_input[i] >= "0" && late_cancel_input[i] <= "9")) return;
    }
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
      {props.row.cells.map(
        (cell: {
          row: { id: string };
          column: { id: string };
          value:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
        }) => {
          return (
            <TableCell
              key={cell.row.id + cell.column.id}
              cell={cell}
              currentState={currentState}
            />
          );
        }
      )}
    </tr>
  );
};

export default TableRow;