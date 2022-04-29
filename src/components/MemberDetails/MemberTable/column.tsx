import { Checkbox } from "@mbkit/checkbox";
import React from "react";
import { Column } from "react-table";
// import styles from './BasicTable.module.scss';
import styles from "./EntryCell.module.scss";
import { useState, useEffect, useContext } from "react";
import CheckEnableContext from "../../store/check-enable-context";

export interface TableColumns {
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

  
export const COLUMNS: Column<TableColumns>[] = [
  {
    Header: "NAME",
    accessor: "Name",
    Cell: (props) => {
      return (
        <div className={styles.name_div}>
          <label className={styles.name_label}>
            {props.value}
          </label>
        </div>
     );
    },
  },
  {
    Header: "CLASSES / APPOINTMENTS",
    accessor: "Class",
    Cell: (props)=>{
      return (
        <div>
          <label className={styles.class_label}>
            {props.value}
          </label>
        </div>
     );
    },
  },
  {
    Header: "DATE & TIME",
    accessor: "Date",
    Cell: (props)=>{
      return (
        <div>
          <label className={styles.date_label}>
            {props.value}
          </label>
        </div>
    );
    },
  },
  {
    Header: "PRICING OPTION",
    accessor: "Pricing",
    Cell: (props)=>{
      return (
        <div>
          <label className={styles.pricing_label}>
          {props.value}
          </label>
        </div>
     );
    },
  },
  {
    Header: "NO-SHOW/LATE",
    accessor: "Cancel",
    Cell:(props)=>{
      return (
        <div>
          <label className={styles.cancel_label}>
          {props.value}
          </label>
        </div>
      );
    },
  },
  {
    Header: "FEE WAIVED",
    accessor: "Waive",
    Cell:(props)=>{
      return(
        <div className={styles.waive_div}>
          <label className={styles.cancel_label}>
          {props.value}
          </label>
        </div>
      );
    },
  },
  {
    Header: "CHARGES",
    accessor: "Charges",
    Cell:(props)=>{
      return(
        <div className={styles.charges_div}>
          <label className={styles.charges_label}>
            ${props.value}
          </label>
        </div>
     );
    },
  },
  {
    Header: "FEE TYPE",
    accessor: "Type",
    Cell:(props)=>{
      console.log("propsss", props);
      const [isCheck, setIsCheck] = useState(props.cell.row.original.Apply);
  const isCheckHandler = () => {
    // console.log(cell.row.index);
    props.rowUpdateHandler(props.cell.row.index);
    setIsCheck(!isCheck);
  };

  const enableCtx = useContext(CheckEnableContext);

      return(
        <div className={styles.type_div}>
          <Checkbox
           className={styles.type_checkbox}
           onChange={isCheckHandler}
           checked={isCheck}
           disabled={enableCtx.isCheckEnabled}
          />
          <label className={styles.type_label}>
          {props.value}
          </label>
        </div>
     );
    },
  },
];
