import React from "react";
import { Checkbox } from "@mbkit/checkbox";
import styles from './FlyoutItem.module.scss';

const FlyoutItem = (props) => {
    const isCheckHandler = () => {
        console.log("Checked");
        props.onCheck(props.item.id, props.item.value);
        // props.updateRow();
    }
  return (
    <li className={styles.item_div}>
      <Checkbox
        id={props.item.id}
        value={props.item.value}
        checked={props.item.isChecked}
        onChange={isCheckHandler}
      />
      <label className={styles.item_label}>{props.item.value}</label>
    </li>
  );
};

export default FlyoutItem;
