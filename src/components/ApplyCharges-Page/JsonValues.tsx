import React from "react";
import styles from "./JsonValues.module.scss";
const JsonValues = (props: any) => {
  const { useServiceData } = props;
  const { usePricingData } = props;
  const { useCancellationData } = props;
  
  return (
    <div className={styles.main2} onClick={props.onCancel}>
      {JSON.stringify(useServiceData)}
      <br /> <br/>
      {JSON.stringify(usePricingData)}
      <br /> <br/>
      {JSON.stringify(useCancellationData)}
    </div>
  );
};

export default JsonValues;
