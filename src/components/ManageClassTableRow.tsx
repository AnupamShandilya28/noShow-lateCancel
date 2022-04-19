import { Checkbox } from "@mbkit/checkbox";
import { Input } from "@mbkit/input";
import React, { useState } from "react";
import { Row } from "react-table";
import styles from "./ManageClassTableRow.module.scss";

const ManageClassTableRow: React.FC<{
  key: string;
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
  const [isLateCancel, setIslateCancel] = useState(
    props.row.values["late_cancel"]
  );
  const [isNoShow, setIsNoShow] = useState(props.row.values["no_show"]);

  const onLateCancelHandler = () => {
    setIslateCancel(!isLateCancel);
  };
  const onNoShowHandler = () => {
    setIsNoShow(!isNoShow);
  };

  const onTimeChangeHandler = (event: any) => {
    console.log(event);
  };
  const onLateCancelChargeHandler = () => {};
  const onNoShowChargeHandler = () => {};
  // console.log(isNoShow);
  console.log(props.row);

  // useEffect(() => {
  //   setIslateCancel(props.row.values["late_cancel"]);
  //   setIsNoShow(props.row.values["no_show"]);
  // }, []);
  return (
    <tr id={styles.trstyle} {...props.row.getRowProps()}>
      {props.row.cells.map((cell) => {
        // console.log(cell);
        if (cell.column.id === "type_of_class") {
          return (
            <td className={styles.type_of_class}>
              <div className={styles.divstyle}>{cell.value}</div>
            </td>
          );
        } else if (cell.column.id === "time_prior_to_class") {
          return (
            <td className={styles.time_prior_to_class}>
              <div className={styles.divstyle}>
                <Input
                  className={styles.inputstyle}
                  onChange={onTimeChangeHandler}
                  value={cell.value}
                  // readOnly={false}
                />
                {/* <input onChange={() => {}} defaultValue={cell.value} /> */}
                <span className={styles.spanstyle}>
                  {" "}
                  Minutes (Prior to class)
                </span>
              </div>
            </td>
          );
        } else if (cell.column.id === "late_cancel") {
          return (
            <td className={styles.late_cancel}>
              <div className={styles.divstyle}>
                <Checkbox
                  className={styles.checkboxstyle}
                  checked={isLateCancel}
                  onChange={onLateCancelHandler}
                ></Checkbox>
                <span className={styles.spanstyle}>Enable</span>
              </div>
            </td>
          );
        } else if (cell.column.id === "late_cancel_charge") {
          return (
            <td className={styles.late_cancel_charge}>
              <div className={styles.divstyle}>
                <Input
                  className={styles.inputstyle}
                  onChange={onLateCancelChargeHandler}
                  type="string"
                  value={cell.value === 0 || !isLateCancel ? "" : cell.value}
                  disabled={!isLateCancel}
                />
              </div>
            </td>
          );
        } else if (cell.column.id === "no_show") {
          return (
            <td className={styles.no_show}>
              <div className={styles.divstyle}>
                <Checkbox
                  className={styles.checkboxstyle}
                  checked={isNoShow}
                  onChange={onNoShowHandler}
                ></Checkbox>

                <span className={styles.spanstyle}>Enable</span>
              </div>
            </td>
          );
        } else if (cell.column.id === "no_show_charge") {
          return (
            <td className={styles.no_show_charge}>
              <div className={styles.divstyle}>
                <Input
                  className={styles.inputstyle}
                  value={cell.value === 0 || !isNoShow ? "" : cell.value}
                  onChange={onNoShowChargeHandler}
                  type="text"
                  disabled={!isNoShow}
                  // value={cell.value}
                />
              </div>
            </td>
          );
        }
        return <></>;

        // return (
        //   // <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
        //   <td>
        //     {cell.column.id === "type_of_class" && (
        //       <div id={styles.type_of_class}>{cell.value}</div>
        //     )}
        //     {cell.column.id === "time_prior_to_class" && (
        //       <div id={styles.time_prior_to_class}>
        //         <Input onChange={onTimeChangeHandler} value={cell.value} />
        //         {/* <input onChange={() => {}} value={cell.value} /> */}
        //         <span>Minutes (Prior to class)</span>
        //       </div>
        //     )}
        //     {cell.column.id === "late_cancel" && (
        //       <div id={styles.late_cancel}>
        //         <label>
        //           <Checkbox
        //             checked={isLateCancel}
        //             onChange={onLateCancelHandler}
        //           ></Checkbox>
        //           Enable
        //         </label>
        //       </div>
        //     )}
        //     {cell.column.id === "late_cancel_charge" && (
        //       <div id={styles.late_cancel_charge}>
        //         <Input
        //           type="text"
        //           onChange={onLateCancelChargeHandler}
        //           value={cell.value}
        //           disabled={!isLateCancel}
        //         />
        //       </div>
        //     )}
        //     {cell.column.id === "no_show" && (
        //       <div id={styles.no_show}>
        //         <Checkbox
        //           checked={isNoShow}
        //           onChange={onNoShowHandler}
        //         ></Checkbox>

        //         <span>
        //           <label htmlFor="no_show">Enable</label>
        //         </span>
        //       </div>
        //     )}
        //     {cell.column.id === "no_show_charge" && (
        //       <div id={styles.no_show_charge}>
        //         <Input
        //           value={cell.value}
        //           onChange={onNoShowChargeHandler}
        //           type="text"
        //           disabled={!isNoShow}
        //           // value={cell.value}
        //         />
        //       </div>
        //     )}
        //   </td>
        // );
      })}
    </tr>
  );
};

export default ManageClassTableRow;
