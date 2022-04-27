import React, { useContext, useEffect, useState } from "react";
import SearchMember from "./SearchMember";
import { Toaster, ToasterExample } from "@mbkit/toaster";
import styles from "./MemberDetails.module.scss";
import Header from "./Header";

import ApplyChargesModal from "../UI/ApplyChargesModal";
import CheckEnableContext from '../store/check-enable-context';
import FlyoutContext from "../store/flyout-context";
import { BasicTable } from "./MemberTable/BasicTable";
import FlyoutColumns from "./FlyoutColumns/FlyoutColumns";
import { PaginationTable } from "./MemberTable/PaginationTable";

const MemberDetails = () => {
  const flyoutCtx = useContext(FlyoutContext);
  const [isApply, setIsApply] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isTouchedConfirm, setIsTouchedConfirm] = useState(false);
  // const [isShowFlyout, setIsShowFlyout] = useState(false);

  const enableCtx = useContext(CheckEnableContext);

  useEffect(() => {
    setTimeout(() => {
      setIsTouchedConfirm(false);
    }, 3000);
  }, [isConfirmed]);

  const showApplyHandler = () => {
    setIsApply(true);
  };

  const confirmHandler = (status) => {
    setIsTouchedConfirm(true);
    setIsConfirmed(status);
    setIsApply(false);
    console.log(status);
    
    enableCtx.isCheckEnabled = status;
    console.log(enableCtx.isCheckEnabled);
    
  }

  // const showFlyoutHandler = (isShow) => {
  //   setIsShowFlyout(isShow);
  // }

  return (
      <div className={styles.member_details_page}>
        {isApply && <ApplyChargesModal onConfirm={confirmHandler} onClose={() => setIsApply(false)}/>}
        {isConfirmed && isTouchedConfirm && <Toaster className={styles.toaster} show={true}><label className={styles.t_text}>Charges applied successfully</label></Toaster>}
        {/* {isShowFlyout && <FlyoutColumns onCheck={checkHandler} />} */}
        <SearchMember />
        <Header onApply={showApplyHandler} />
        <div className={styles.main_table}><PaginationTable /></div>
        {/* <PaginationTable /> */}
      </div>
  );
};

export default MemberDetails;
