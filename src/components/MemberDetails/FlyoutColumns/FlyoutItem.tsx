import React from "react";
import { Checkbox } from "@mbkit/checkbox";
import { ColumnInstance } from "react-table";
import styles from "./FlyoutItem.module.scss";

const FlyoutItem = (props: {item: ColumnInstance<{Name: string;
  Class: string;
  Date: string;
  Pricing: string;
  Cancel: number;
  Waive: number;
  Charges: number;
  Apply: boolean;
  Type: string;}>;}) => {
  const isCheckHandler = () => {
    console.log("Checked");
    console.log("item ", props.item);
    // props.onCheck(props.item.id, props.item.value);
    // props.updateRow();
  };
  var isDisable = false;
  if(props.item.Header === 'NAME' || props.item.Header === 'CHARGES' || props.item.Header === 'FEE TYPE'){
    isDisable = true;
  }
  var headerString:any = props.item.Header || "";

  return (
    <li className={styles.item_div}>
      <Checkbox
        {...props.item.getToggleHiddenProps()}
        id={props.item.id}
        onClick={isCheckHandler}
        disabled={isDisable}
      />
      <label className={styles.item_label}>{headerString.charAt(0) + headerString.slice(1).toLowerCase()}</label>
    </li>
  );
};

export default FlyoutItem;
