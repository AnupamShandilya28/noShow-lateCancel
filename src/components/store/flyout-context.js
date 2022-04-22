import React from "react";

const tableColumns = [
  { id: "Name", value: "Name", isChecked: true },
  { id: "Class", value: "Classes", isChecked: true },
  { id: "Data", value: "Date", isChecked: true },
  { id: "Pricing", value: "Pricing", isChecked: true },
  { id: "Cancel", value: "No show/late", isChecked: false },
];
const FlyoutContext = React.createContext({
  isShowFlyout: false,
  columnList: tableColumns,
});

export default FlyoutContext;
