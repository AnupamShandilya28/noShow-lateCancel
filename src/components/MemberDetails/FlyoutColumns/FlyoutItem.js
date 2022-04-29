import React from "react";
import { Checkbox } from "@mbkit/checkbox";
import styles from "./FlyoutItem.module.scss";

const FlyoutItem = (props) => {
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
  var headerString = props.item.Header;

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
