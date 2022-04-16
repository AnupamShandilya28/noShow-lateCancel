import React, { useState } from "react";
import styles from "./App.module.scss";
import ManageFeeWaived from "./Components/ManageFeeWaived/ManageFeeWaived";
import { Card } from "@mbkit/card";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const App = () => {


  return (
    <div className={styles.card}>
      <div className={styles.option}>
        <div></div>
        <div>Manage Classes</div>
      </div>
      <div className={styles.option}>
      <div></div>
        <div>Manage Appointments</div>
      </div>
      <div className={styles.option}>
      <div></div>
        <div>Manage Fee Waived</div>
      </div>
      <ManageFeeWaived />
    </div>
  )
};
export default App;
