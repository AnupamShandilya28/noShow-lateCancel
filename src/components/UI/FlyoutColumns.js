import { Checkbox } from "@mbkit/checkbox";
import React, { useState } from "react";
import styles from "./FlyoutColumns.module.scss";

const FlyoutColumns = () => {
  const [flyoutColumns, setFlyoutColumns] = useState({
    columns: [
      { id: 1, value: "Name", isChecked: true },
      { id: 2, value: "Classes", isChecked: true },
      { id: 3, value: "Date", isChecked: true },
      { id: 4, value: "Pricing", isChecked: true },
      {id: 5, value: "Cancellation time", isChecked: false},
      {id: 6, value: "Cancellation time", isChecked: false},
      {id: 7, value: "Cancellation time", isChecked: false},
      {id: 8, value: "Cancellation time", isChecked: false},
      { id: 9, value: "Cancellation time", isChecked: false },
      { id: 10, value: "Credit card status", isChecked: false },
      { id: 11, value: "Staff Name", isChecked: false },
    ],
  });

  const isCheckHandler = () => {
    setFlyoutColumns((prev) => {
      
    })
  }
  return (
    <div className={styles.flyout_div}>
      <ul>
        {flyoutColumns.columns.map((item) => {
          return (
            <div>
              <Checkbox
                id={item.id}
                value={item.value}
                isChecked={item.isChecked}
                onChange={isCheckHandler}
              />
              <label>{item.value}</label>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default FlyoutColumns;
