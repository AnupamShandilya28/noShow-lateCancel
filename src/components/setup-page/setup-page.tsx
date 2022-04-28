import React, { Component, useState } from "react";
import styles from "./SetupPage.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mbkit/button";
import Card from "./Card";
import ManageAppointments from "../ManageAppointments/ManageAppointments";
import ManageFeeWaived from "../ManageFeeWaived/ManageFeeWaived";
import ManageClasses from "../ManageClasses/ManageClasses";
import { Toaster } from "@mbkit/toaster";
import ManageGeneral from "../ManageGeneral";
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
  const onClassExpandHandler = (isExpanded: boolean) => {
    setManageState((prev) => {
      return {
        manageClasses: isExpanded,
        manageAppointment: false,
        manageFee: false,
      };
    });
  };
  const onAppointmentExpandHandler = (isExpanded: boolean) => {
    setManageState((prev) => {
      return {
        manageClasses: false,
        manageAppointment: isExpanded,
        manageFee: false,
      };
    });
  };
  const onFeeExpandHandler = (isExpanded: boolean) => {
    setManageState((prev) => {
      return {
        manageClasses: false,
        manageAppointment: false,
        manageFee: isExpanded,
      };
    });
  };

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

      <div className={styles.whitespace}>
        <Card
          isExpanded={manageState.manageClasses}
          onExpand={onClassExpandHandler}
          title={"Manage Classes"}
        ></Card>
        {manageState.manageClasses && <ManageGeneral />}
        <Card
          isExpanded={manageState.manageAppointment}
          onExpand={onAppointmentExpandHandler}
          title={"Manage Appointments"}
        ></Card>
        {manageState.manageAppointment && <ManageGeneral />}
        <Card
          isExpanded={manageState.manageFee}
          onExpand={onFeeExpandHandler}
          title={"Manage Fee Waived"}
        ></Card>
        {manageState.manageFee && <ManageFeeWaived />}
      </div>
    </div>
  );
};
export default SetupPage;
