import React, { useState } from "react";
import styles from "./ApplyCharges.module.scss";
import { Label } from "@mbkit/label";
import Main from "./MainModal/Main";
import Spinner from "./Spinner";
import MemberDetails from "../MemberDetails/MemberDetails";
const ApplyCharges = () => {
  const [showChargesPage, setShowChargesPage] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

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

        <span className={styles.head2}>Manager Tools </span>
        <span className={styles.head3}>{">"} No Show/Late Cancel</span>

        <div className={styles.mainDiv}>
          <Main onSearchClick={searchButtonHandler}></Main>
        </div>
        {showLoader && <Spinner />}
        {showChargesPage && <MemberDetails />}
      </div>
    </>
  );
};

export default ApplyCharges;
