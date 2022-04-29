import React, { useState } from "react";
import styles from "./Filters.module.scss";
import { Checkbox } from "@mbkit/checkbox";
import { MultiSelect, MultiSelectOption } from "../MultiSelect/MultiSelect";

const Filters = (props: any) => {

  const ServiceOptions: MultiSelectOption[] = [
    { label: "Select All", checked: false, id: "0" },
    { label: "Appointments", checked: false, id: "1" },
    { label: "Class & Event Reservation", checked: false, id: "2" },
  ];
  const [serviceState, setServiceState] = useState(ServiceOptions);

  const { onSelectService } = props;
  const ServiceHandler = (o: any) => {
    setServiceState(o);
    props.onSelectService(o);
  };

  const { onSelectPricing } = props;
  const PricingOptions: MultiSelectOption[] = [
    { label: "Select All", checked: false, id: "0" },
    { label: "Memberships Type 1", checked: false, id: "1" },
    { label: "Memberships Type 2", checked: false, id: "2" },
    { label: "Type 1", checked: false, id: "3" },
    { label: "Type 2", checked: false, id: "4" },
  ];
  const [pricingState, setPricingState] = useState(PricingOptions);

  const PriceHandler = (o: any) => {
    setPricingState(o);
    props.onSelectPricing(o);
  };

  const CancellationOptions: MultiSelectOption[] = [
    { label: "Select All", checked: false, id: "0" },
    { label: "Late Cancellation (Charged)", checked: false, id: "1" },
    { label: "No Show (Charged)", checked: false, id: "2" },
  ];
  const [cancellationState, setCancellationState] =
    useState(CancellationOptions);

  const { onSelectCancellation } = props;
  const CancellationHandler = (o: any) => {
    setCancellationState(o);
    props.onSelectCancellation(o);
  };

  const [creditState, setCreditState] = useState(false);

  const { onCredit } = props;
  const CreditCheckBoxHandler = () => {
    setCreditState(!creditState);
    props.onCredit(!creditState);
  };

  return (
    <>
      <div className={styles.second}>
        <p>Filters</p>
        <MultiSelect
          showPills={false}
          label="Type of Service"
          options={serviceState}
          onChange={ServiceHandler}
        />
        <br />
        <MultiSelect
          showPills={false}
          label="Select Pricing Options"
          useSearchInput
          options={pricingState}
          onChange={PriceHandler}
        />
        <br />
        <MultiSelect
          showPills={false}
          label="Cancellation Method"
          options={cancellationState}
          onChange={CancellationHandler}
        ></MultiSelect>
        <br />
        <Checkbox onChange={CreditCheckBoxHandler} checked={creditState} /> Only
        show clients whose credit cards are listed.
      </div>
    </>
  );
};

export default Filters;
