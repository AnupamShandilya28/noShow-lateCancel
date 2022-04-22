import React, { useContext, useState } from "react";
import FlyoutList from "./FlyoutList";
import styles from './FlyoutColumns.module.scss';
import FlyoutContext from "../../store/flyout-context";

const FlyoutColumns = (props) => {
  const flyoutCtx = useContext(FlyoutContext);

  const [showColumns, setShowColumns] = useState([
    { id: 'Name', value: "Name", isChecked: true },
    { id: 'Class', value: "Classes", isChecked: true },
    { id: 'Data', value: "Date", isChecked: true },
    { id: 'Pricing', value: "Pricing", isChecked: true },
    { id: 'Cancel', value: "No show/late", isChecked: false },
    // { id: 6, value: "Fee waived", isChecked: false },
    // { id: 7, value: "Charges", isChecked: false },
    // { id: 8, value: "Status", isChecked: false },
    // { id: 9, value: "Cancellation time", isChecked: false },
    // { id: 10, value: "Credit card status", isChecked: false },
    // { id: 11, value: "Staff Name", isChecked: false },
  ]);

  const checkColumnHandler = (itemId, itemValue) => {
    console.log("Handler");
    var index = showColumns.findIndex(x=> x.id === itemId);
    setShowColumns((prevArray) => {
       return [ ...prevArray.slice(0, index),
        {id: itemId, value: itemValue, isChecked: !prevArray[index].isChecked},
        ...prevArray.slice(index + 1),
       ]
    });
    flyoutCtx.columnList = showColumns;
  };

  return (
    <div className={styles.flyout_div}>
      <FlyoutList columns={props.columns} onCheck={props.onCheck} />
    </div>
  );
};

export default FlyoutColumns;
