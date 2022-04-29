import styles from "./Main.module.scss";
import React from "react";

import Dates from "./Dates";
import Filters from "./Filters";
import Actions from "./Actions";
const Pro = (props: any) => {
  const { onSearchClick } = props;

  const { onSelectServiceBox } = props;
  const { onSelectPricingBox } = props;
  const { onSelectCancellationBox } = props;
  const { onCreditCheckbox } = props;
  const { startDate } = props;
  const { endDate } = props;
  return (
    <div className={styles.wrapper}>
      <Dates start={startDate} end={endDate} />
      <div className={styles.separator}></div>
      <Filters
        onSelectService={onSelectServiceBox}
        onSelectPricing={onSelectPricingBox}
        onSelectCancellation={onSelectCancellationBox}
        onCredit={onCreditCheckbox}
      />
      <div className={styles.separator}></div>
      <Actions onSearchButtonClick={onSearchClick} />
    </div>
  );
};

export default Pro;
