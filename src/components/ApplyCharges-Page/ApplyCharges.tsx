import React, { useState } from "react";
import styles from "./ApplyCharges.module.scss";
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

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const ServiceHandler = (o: any) => {
    const activeServiceOption = o.filter((opt: any) => {
      if (opt.checked == true) {
        return opt;
      }
    });
    setServiceData(activeServiceOption);
  };

  const PricingHandler = (o: any) => {
    const activePricingOption = o.filter((opt: any) => {
      if (opt.checked == true) {
        return opt;
      }
    });
    setPricingData(activePricingOption);
  };

  const CancellationHandler = (o: any) => {
    const activeCancellationOption = o.filter((opt: any) => {
      if (opt.checked == true) {
        return opt;
      }
    });
    setCancellationData(activeCancellationOption);
  };
  const [creditState, setCreditState] = useState(Boolean);
  const CreditCheckboxHandler = (o: boolean) => {
    setCreditState(o);
  };

  const searchButtonHandler = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowJsonValuesDiv(true);
      setShowChargesPage(true);
      setShowLoader(false);
    }, 700);
  };

  const startDateHandler = (o: any) => {
    setStartDate(o);
  };
  const endDateHandler = (o: any) => {
    setEndDate(o);
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
            onCreditCheckbox={CreditCheckboxHandler}
            startDate={startDateHandler}
            endDate={endDateHandler}
          ></Main>
        </div>
        {showJsonValuesDiv && (
          <JsonValues
            useServiceData={serviceData}
            usePricingData={pricingData}
            useCancellationData={cancellationData}
            useCreditState={creditState}
            useStartDate={startDate}
            useEndDate={endDate}
          />
        )}
        {showLoader && <Spinner />}
        {showChargesPage && <MemberDetails />}
      </div>
    </>
  );
};

export default ApplyCharges;
