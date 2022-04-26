import { Rowing } from "@material-ui/icons";
import { Checkbox } from "@mbkit/checkbox";
import { Input } from "@mbkit/input";
import React, { useState } from "react";
import { Row } from "react-table";
import styles from "./styles/ManageClassTableRow.module.scss";

const ManageClassTableRow: React.FC<{
  key: number;
  row: Row<{
    id: number;
    type_of_class: string;
    time_prior_to_class: number;
    late_cancel: boolean;
    late_cancel_charge: number;
    no_show: boolean;
    no_show_charge: number;
  }>;
}> = (props) => {
  const [timeInput, setTimeInput] = useState(
    props.row.values["time_prior_to_class"]
  );
  const [isLateCancel, setIslateCancel] = useState(
    props.row.values["late_cancel"]
  );
  const [isNoShow, setIsNoShow] = useState(props.row.values["no_show"]);
  const [lateCancelChargeInput, setLateCancelChargeInput] = useState(
    props.row.values["late_cancel_charge"]
  );
  const [noShowChargeInput, setNoShowChargeInput] = useState(
    props.row.values["no_show_charge"]
  );

  const onLateCancelHandler = () => {
    setIslateCancel(!isLateCancel);
    setLateCancelChargeInput(0);
  };
  const onNoShowHandler = () => {
    setIsNoShow(!isNoShow);
    setNoShowChargeInput(0);
  };

  const checkValidity = (value: string): boolean => {
    for (let i = 0; i < value.length; i++) {
      if (!(value[i] >= "0" && value[i] <= "9")) return false;
    }
    return true;
  };

  const onTimeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!checkValidity(event.target.value)) return;
    setTimeInput(event.target.value);
  };
  const onLateCancelChargeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!checkValidity(event.target.value)) return;
    setLateCancelChargeInput(event.target.value);
  };
  const onNoShowChargeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!checkValidity(event.target.value)) return;
    setNoShowChargeInput(event.target.value);
  };

  return (
    <tr id={styles.trstyle} {...props.row.getRowProps()}>
      {props.row.cells.map((cell) => {
        if (cell.column.id === "type_of_class") {
          return (
            <td key={cell.row.id + cell.column.id} className={styles.rowstyle}>
              {cell.value}
            </td>
          );
        } else if (cell.column.id === "time_prior_to_class") {
          return (
            <td key={cell.row.id + cell.column.id} className={styles.rowstyle}>
              <div className={styles.divstyle}>
                <Input
                  id={styles.inputstyle}
                  value={timeInput}
                  onChange={onTimeChangeHandler}
                />
                <span id={styles.spanstyle}>Minutes (Prior to class)</span>
              </div>
            </td>
          );
        } else if (cell.column.id === "late_cancel") {
          return (
            <td key={cell.row.id + cell.column.id} className={styles.rowstyle}>
              <div className={styles.divstyle}>
                <Checkbox
                  className={styles.checkboxstyle}
                  checked={isLateCancel}
                  onChange={onLateCancelHandler}
                ></Checkbox>
                <span id={styles.spanstyle}>Enable</span>
              </div>
            </td>
          );
        } else if (cell.column.id === "late_cancel_charge") {
          return (
            <td key={cell.row.id + cell.column.id} className={styles.rowstyle}>
              <div className={styles.divstyle}>
                <Input
                  id={styles.inputstyle}
                  onChange={onLateCancelChargeHandler}
                  type="string"
                  value={
                    lateCancelChargeInput === 0 ? "" : lateCancelChargeInput
                  }
                  disabled={!isLateCancel}
                />
              </div>
            </td>
          );
        } else if (cell.column.id === "no_show") {
          return (
            <td key={cell.row.id + cell.column.id} className={styles.rowstyle}>
              <div className={styles.divstyle}>
                <Checkbox
                  className={styles.checkboxstyle}
                  checked={isNoShow}
                  onChange={onNoShowHandler}
                ></Checkbox>

                <span id={styles.spanstyle}>Enable</span>
              </div>
            </td>
          );
        } else if (cell.column.id === "no_show_charge") {
          return (
            <td key={cell.row.id + cell.column.id} className={styles.rowstyle}>
              <div className={styles.divstyle}>
                <Input
                  id={styles.inputstyle}
                  value={noShowChargeInput === 0 ? "" : noShowChargeInput}
                  onChange={onNoShowChargeHandler}
                  type="text"
                  disabled={!isNoShow}
                />
              </div>
            </td>
          );
        }
        return <></>;
      })}
    </tr>
  );
};

export default ManageClassTableRow;
