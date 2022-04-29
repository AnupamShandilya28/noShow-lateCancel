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

  return (
    <div className={styles.wrapper}>
      <Dates />
      <div className={styles.separator}></div>
      <Filters
        onSelectService={onSelectServiceBox}
        onSelectPricing={onSelectPricingBox}
        onSelectCancellation={onSelectCancellationBox}
      />
      <div className={styles.separator}></div>
      <Actions onSearchButtonClick={onSearchClick} />
    </div>
  );
};

export default Pro;
