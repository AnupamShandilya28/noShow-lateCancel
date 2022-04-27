import React from "react";
import FlyoutItem from "./FlyoutItem";
import styles from "./FlyoutList.module.scss";

const FlyoutList = (props) => {
  return (
    <ul className={styles.list}>
      {props.columns.map((column) => {
        return (
          <div>
            <FlyoutItem item={column} />
            <hr className={styles.line}></hr>
          </div>
        );
      })}
    </ul>
  );
};

export default FlyoutList;
