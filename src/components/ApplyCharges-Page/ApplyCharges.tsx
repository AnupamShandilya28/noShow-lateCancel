import React, { useState } from "react";
import styles from "./ApplyCharges.module.scss";
import { Label } from "@mbkit/label";
import Main from "./MainModal/Main";
import Content from "./Content";
import Spinner from "./Spinner";
const ApplyCharges = () => {
  const [showChargesPage, setShowChargesPage] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const closeContentDiv = () => {
    setShowChargesPage(false);
  };

  const searchButtonHandler = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowChargesPage(true);
      setShowLoader(false);
    }, 1000);
  };

  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.head}>No Show/Late Cancel</h2>
        <Label>
          <span className={styles.head2}>Manager Tools </span>
          <span className={styles.lab}>{">"} No Show/Late Cancel</span>
        </Label>

        <div className={styles.mainDiv}>
          <Main onSearchClick={searchButtonHandler}></Main>
        </div>
        {showLoader && <Spinner />}
        {showChargesPage && <Content onCancel={closeContentDiv}></Content>}
      </div>
    </>
  );
};

export default ApplyCharges;
