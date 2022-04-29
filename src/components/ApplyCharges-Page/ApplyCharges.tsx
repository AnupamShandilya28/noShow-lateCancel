import React, { useState } from "react";
import styles from "./ApplyCharges.module.scss";
import { Label } from "@mbkit/label";
import Main from "./MainModal/Main";
import Spinner from "./Spinner";
import MemberDetails from "../MemberDetails/MemberDetails";
import JsonValues from "./JsonValues";
const ApplyCharges = (props: any) => {
  const [showChargesPage, setShowChargesPage] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showJsonValuesDiv, setShowJsonValuesDiv] = useState(false);

  const [serviceData, setServiceData] = useState([]);
  const [pricingData, setPricingData] = useState([]);
  const [cancellationData, setCancellationData] = useState([]);

  const ServiceHandler = (o: any) => {
    const activeoption = o.filter((opt: any) => {
      if (opt.checked == true) {
        return opt;
      }
    });
    setServiceData(activeoption);
  };

  const PricingHandler = (o: any) => {
    const activeoption = o.filter((opt: any) => {
      if (opt.checked == true) {
        return opt;
      }
    });
    setPricingData(activeoption);
  };

  const CancellationHandler = (o: any) => {
    const activeoption = o.filter((opt: any) => {
      if (opt.checked == true) {
        return opt;
      }
    });
    setCancellationData(activeoption);
  };

  const searchButtonHandler = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowJsonValuesDiv(true);
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
          <Main
            onSearchClick={searchButtonHandler}
            onSelectServiceBox={ServiceHandler}
            onSelectPricingBox={PricingHandler}
            onSelectCancellationBox={CancellationHandler}
          ></Main>
        </div>
        {showJsonValuesDiv && (
          <JsonValues
            useServiceData={serviceData}
            usePricingData={pricingData}
            useCancellationData={cancellationData}
          />
        )}
        {showLoader && <Spinner />}
        {showChargesPage && <MemberDetails />}
      </div>
    </>
  );
};

export default ApplyCharges;
