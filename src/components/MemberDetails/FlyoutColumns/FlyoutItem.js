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
  return (
    <li key={props.item.id} className={styles.item_div}>
      <Checkbox
        {...props.item.getToggleHiddenProps()}
        id={props.item.id}
        onClick={isCheckHandler}
      />
      <label className={styles.item_label}>{props.item.Header}</label>
    </li>
  );
};

export default FlyoutItem;
