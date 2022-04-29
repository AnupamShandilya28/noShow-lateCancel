import React from "react";
import styles from "./JsonValues.module.scss";
import dateFormat from "dateformat";

const JsonValues = (props: any) => {
  const { useServiceData } = props;
  const { usePricingData } = props;
  const { useCancellationData } = props;
  const { useCreditState } = props;
  const { useStartDate } = props;
  const { useEndDate } = props;

  return (
    <>
      <div className={styles.main2}>
        {JSON.stringify(useServiceData)}
        <br /> <br />
        {JSON.stringify(usePricingData)}
        <br /> <br />
        {JSON.stringify(useCancellationData)}
      </div>
      <div className={styles.credit}>
        {JSON.stringify(dateFormat(useStartDate, "d/m/yyyy"))}
        <br />
        <br />
        {JSON.stringify(dateFormat(useEndDate, "d/m/yyyy"))}
        <br />
        <br />
        {JSON.stringify(useCreditState)}
      </div>
    </>
  );
};

export default JsonValues;
