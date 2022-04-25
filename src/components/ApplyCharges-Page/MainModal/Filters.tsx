import React, { Component, useState } from "react";
import styles from "./Filter.module.scss";
import { Label } from "@mbkit/label";
import { Checkbox } from "@mbkit/checkbox";
// import { MultiSelect } from "@mbkit/select";
import { MultiSelect, MultiSelectOption } from "../MultiSelect/MultiSelect";

const Filters = () => {
  const ServiceOptions: MultiSelectOption[] = [
    { label: "Select All", checked: false, id: "0" },
    { label: "Appointments", checked: false, id: "test2" },
    { label: "Class & Event Reservation", checked: false, id: "test3" },
  ];
  const [serviceState, setServiceState] = useState(ServiceOptions);

  const PricingOptions: MultiSelectOption[] = [
    { label: "Select All", checked: false, id: "0" },
    { label: "Memberships Type 1", checked: false, id: "test2" },
    { label: "Memberships Type 2", checked: false, id: "test3" },
    { label: "Type 1", checked: false, id: "test4" },
    { label: "Type 2", checked: false, id: "test5" },
  ];
  const [pricingState, setPricingState] = useState(PricingOptions);

  const CancellationOptions: MultiSelectOption[] = [
    { label: "Select All", checked: false, id: "0" },
    { label: "Late Cancellation (Charged)", checked: false, id: "test2" },
    { label: "No Show (Charged)", checked: false, id: "test3" },
  ];
  const [cancellationState, setCancellationState] = useState(CancellationOptions);
  const [creditState, setCreditState] = useState(false);

  const handler = () => {
    setCreditState(!creditState);
  };

  return (
    <>
      <div className={styles.second}>
        <p>Filters</p>
        <MultiSelect
          showPills={false}
          label="Type of Service"
          options={serviceState}
          onChange={setServiceState}
        />
        <br />
        <MultiSelect
          showPills={false}
          label="Select Pricing Options"
          useSearchInput
          options={pricingState}
          onChange={setPricingState}
        />
        <br />
        <MultiSelect
          showPills={false}
          label="Cancellation Method"
          options={cancellationState}
          onChange={setCancellationState}
        ></MultiSelect>
        <br />
        <Checkbox onChange={handler} checked={creditState} /> Only show clients whose
        credit cards are listed.
      </div>
    </>
  );
};

export default Filters;
