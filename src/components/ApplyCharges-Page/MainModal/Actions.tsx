import React, { useState } from "react";
import styles from "./Actions.module.scss";
import { Button } from "@mbkit/button";


const Actions = (props: any) => {
  const { onSearchButtonClick } = props;

  const [showLoader, setShowLoader] = useState(false);

  const handler = () => {
    setShowLoader(true);
    onSearchButtonClick(true);

    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  };
  return (
    <>
      <div className={styles.third}>
        <p>Actions</p>
        <Button variant="secondary" onClick={handler}>
          {!showLoader && <>Search</>}
          {showLoader && <>Loading...</>}
        </Button>
        <br />
        <br />
        <Button variant="primary">Download Report</Button>
      </div>
    </>
  );
};

export default Actions;
