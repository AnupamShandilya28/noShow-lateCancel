import React, { Component, useState } from "react";
import styles from "./SetupPage.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mbkit/button";
import Card from "./Card";
import ManageAppointments from "../ManageAppointments/ManageAppointments";
import ManageFeeWaived from "../ManageFeeWaived/ManageFeeWaived";
import ManageClasses from "../ManageClasses/ManageClasses";
import { Toaster } from "@mbkit/toaster";
export const SetupPage = () => {
  const [manageState, setManageState] = useState({
    manageClasses: false,
    manageFee: false,
    manageAppointment: false,
  });
  const [updatebutton, setupdatebutton] = useState(false);

  const hidetoaster = () => {
    setupdatebutton(false);
  };
  const onclickhandler = () => {
    setupdatebutton(true);
    setTimeout(hidetoaster, 5000);
  };
  //   const [manageFee,setManageFee]=useState(false);
  //   const [manageAppointment,setManageAppointment]=useState(false);
  //   const stateobject={manageAppointment,manageClasses,manageFee,setManageAppointment,setManageClasses,setManageFee};
  return (
    <div className={styles.firstpage}>
      <Toaster show={updatebutton}>Changes updated successfully!</Toaster>
      <span className={styles.header}>
        <div className={styles.headname}>
          <div id={styles.title}>No-show/Late Cancel</div>
          <div id={styles.pages}>
            <div id={styles.page1}>Manager Tools</div>
            <ArrowForwardIosIcon id={styles.arrow1} />
            <div id={styles.page2}>No-show/Late Cancel</div>
            <ArrowForwardIosIcon id={styles.arrow2} />
          </div>
        </div>
        <Button
          id={styles.buttonstyles}
          variant={"primary"}
          onClick={onclickhandler}
        >
          Update
        </Button>
      </span>
      {/* state={activepane:0} */}

      <div className={styles.whitespace}>
        <Card
          managestate={manageState}
          setmanagestate={setManageState}
          title={"Manage Classes"}
        ></Card>
        {manageState.manageClasses && <ManageClasses />}
        <Card
          managestate={manageState}
          setmanagestate={setManageState}
          title={"Manage Appointments"}
        ></Card>
        {manageState.manageAppointment && <ManageAppointments />}
        <Card
          managestate={manageState}
          setmanagestate={setManageState}
          title={"Manage Fee Waived"}
        ></Card>
        {manageState.manageFee && <ManageFeeWaived />}
      </div>
    </div>
  );
};
export default SetupPage;
