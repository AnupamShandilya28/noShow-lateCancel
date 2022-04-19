import React, { useState } from "react";
import styles from "./App.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ManageClass from "./components/ManageClass";
import { Button } from "@mbkit/button";
import { Input } from "@mbkit/input";
import { red } from "@mui/material/colors";

export const App = () => {
  // const [inputValue, setInputValue] = useState("pallav");

  return (
    <div className={styles.firstpage}>
      <span className={styles.header}>
        <div className={styles.headname}>
          <div id={styles.title}>NoShow/Late Cancel</div>
          <div id={styles.pages}>
            <div id={styles.page1}>Manager Tools</div>
            <ArrowForwardIosIcon id={styles.arrow1} />
            <div id={styles.page2}>No Show / Late Cancel</div>
            <ArrowForwardIosIcon id={styles.arrow2} />
          </div>
        </div>
        <Button id={styles.buttonstyles} variant={"primary"}>
          Update
        </Button>
      </span>

      <div className={styles.whitespace}>
        <ManageClass />
        <ManageClass />
        <ManageClass />
      </div>
    </div>
  );
};
export default App;
