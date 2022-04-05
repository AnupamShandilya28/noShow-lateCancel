import React, { useState } from "react";
import styles from "./App.module.scss";
import ManageFeeWaived from "./Components/ManageFeeWaived/ManageFeeWaived";
import { Card } from "@mbkit/card";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const App = () => {
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);

  return (
    <Card className={styles.card}>
      <div className={styles.option}>
        <div>
          {!expand1 && (
            <ArrowForwardIosIcon id={styles.icon} onClick={() => setExpand1(!expand1)} />
          )}
          {expand1 && <ExpandMoreIcon onClick={() => setExpand1(!expand1)} />}
        </div>
        <div>Manage Classes </div>
      </div>
      <div className={styles.option}>
        <div>
          {!expand2 && (
            <ArrowForwardIosIcon id={styles.icon} onClick={() => setExpand2(!expand2)} />
          )}
          {expand2 && <ExpandMoreIcon onClick={() => setExpand2(!expand2)} />}
        </div>
        <div>Manage Appointments</div>
      </div>
      <div className={styles.option}>
        <div>
          {!expand3 && (
            <ArrowForwardIosIcon id={styles.icon} onClick={() => setExpand3(!expand3)} />
          )}
          {expand3 && <ExpandMoreIcon onClick={() => setExpand3(!expand3)} />}
        </div>
        <div>Manage Fee Waived </div>
      </div>
      <ManageFeeWaived />
    </Card>
  );
};
export default App;
