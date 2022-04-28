import { Checkbox } from "@mbkit/checkbox";
import React from "react";
import { Column } from "react-table";

export interface TableColumns {
  id: number;
  type_of_class: string;
  time_prior_to_class: number;
  late_cancel: boolean;
  late_cancel_charge: number;
  no_show: boolean;
  no_show_charge: number;
}

export const COLUMNS: Column<TableColumns>[] = [
  {
    Header: "TYPE",
    accessor: "type_of_class",
    Cell: (props) => {
      return (
        <div>
          <label>{props.value}</label>
        </div>
      );
    },
  },
  {
    Header: "TIME (PRIOR TO CLASS)",
    accessor: "time_prior_to_class",
  },
  {
    Header: "LATE CANCEL",
    accessor: "late_cancel",

    Cell: (props) => {
      console.log(props);

      return (
        <div>
          <Checkbox checked={true} onChange={() => {}}></Checkbox>
          <span>Enable</span>
        </div>
      );
    },
  },
  {
    Header: "CHARGES",
    accessor: "late_cancel_charge",
  },
  {
    Header: "NO SHOW",
    accessor: "no_show",
  },
  {
    Header: "CHARGES",
    accessor: "no_show_charge",
  },
];
