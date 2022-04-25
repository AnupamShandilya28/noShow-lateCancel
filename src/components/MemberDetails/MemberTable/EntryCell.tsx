import React from "react";
import styles from "./EntryCell.module.scss";
import { Checkbox } from "@mbkit/checkbox";
import { useState, useEffect, useContext } from "react";
import CheckEnableContext from "../../store/check-enable-context";
import { Cell } from "react-table";

const EntryCell: React.FC<{
<<<<<<< HEAD
  cell: Cell<
    {
      Name: string;
      Class: string;
      Date: string;
      Pricing: string;
      Cancel: number;
      Waive: number;
      Charges: number;
      Apply: boolean;
      Type: string;
    }
  >,
  updateRow: (id : number)=> void;
}> = (props) => {

  const [isCheck, setIsCheck] = useState(props.cell.row.original.Apply);

=======
  cell: Cell<{
    Name: string;
    Class: string;
    Date: string;
    Pricing: string;
    Cancel: number;
    Waive: number;
    Charges: number;
    Apply: boolean;
    Type: string;
  }>;
  updateRow: (id: number) => void;
}> = (props) => {
  const [isCheck, setIsCheck] = useState(props.cell.row.original.Apply);
>>>>>>> fb7c7f964f90711faa5df25c3517fb05ba0706dc
  const isCheckHandler = () => {
    console.log(props.cell.row.index);
    props.updateRow(props.cell.row.index);
    setIsCheck(!isCheck);
  };

  const enableCtx = useContext(CheckEnableContext);

  if (props.cell.column.id === "Name") {
    return (
      <td {...props.cell.getCellProps()} className={styles.entry_name}>
        <div className={styles.name_div}>
          <label className={styles.name_label}>
            {props.cell.render("Cell")}
          </label>
        </div>
      </td>
    );
  } else if (props.cell.column.id === "Class") {
    return (
      <td {...props.cell.getCellProps()} className={styles.entry_class}>
        <div>
          <label className={styles.class_label}>
            {props.cell.render("Cell")}
          </label>
        </div>
      </td>
    );
  } else if (props.cell.column.id === "Date") {
    return (
      <td {...props.cell.getCellProps()} className={styles.entry_date}>
        <div>
          <label className={styles.date_label}>
            {props.cell.render("Cell")}
          </label>
        </div>
      </td>
    );
  } else if (props.cell.column.id === "Pricing") {
    return (
      <td {...props.cell.getCellProps()} className={styles.entry_pricing}>
        <div>
          <label className={styles.pricing_label}>
            {props.cell.render("Cell")}
          </label>
        </div>
      </td>
    );
  } else if (props.cell.column.id === "Cancel") {
    return (
      <td {...props.cell.getCellProps()} className={styles.entry_cancel}>
        <div>
          <label className={styles.cancel_label}>
            {props.cell.render("Cell")}
          </label>
        </div>
      </td>
    );
  } else if (props.cell.column.id === "Waive") {
    return (
      <td {...props.cell.getCellProps()} className={styles.entry_waive}>
        <div className={styles.waive_div}>
          <label className={styles.cancel_label}>
            {props.cell.render("Cell")}
          </label>
        </div>
      </td>
    );
  } else if (props.cell.column.id === "Charges") {
    return (
      <td {...props.cell.getCellProps()} className={styles.entry_charges}>
        <div className={styles.charges_div}>
          <label className={styles.charges_label}>
            ${props.cell.render("Cell")}
          </label>
        </div>
      </td>
    );
  } else if (props.cell.column.id === "Type") {
    return (
      <td {...props.cell.getCellProps()} className={styles.entry_type}>
        <div className={styles.type_div}>
          <Checkbox
            className={styles.type_checkbox}
            onChange={isCheckHandler}
            checked={isCheck}
            disabled={enableCtx.isCheckEnabled}
          />
          <label className={styles.type_label}>
            {props.cell.render("Cell")}
          </label>
        </div>
      </td>
    );
  } else {
    return <td></td>;
  }
};

export default EntryCell;
