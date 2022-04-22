import React from 'react';
import { Column} from "react-table";
import styles from './BasicTable.module.scss';

export interface TableColumns{
  Name: string;
    Class: string;
    Date: string;
    Pricing: string;
    Cancel: number;
    Waive: number;
    Charges: number;
    Apply: boolean;
    Type: string;
}

export const COLUMNS: Column<TableColumns>[]= [
  {
    Header: "NAME",
    accessor: "Name",
  },
  {
    Header: "CLASSES / APPOINTMENTS",
    accessor: "Class",
  },
  {
    Header: "DATE & TIME",
    accessor: "Date",
  },
  {
    Header: "PRICING OPTION",
    accessor: "Pricing",
  },
  {
    Header: "NO-SHOW/LATE",
    accessor: "Cancel",
  },
  {
    Header: "FEE WAIVED",
    accessor: "Waive",
  },
  {
    Header: "CHARGES",
    accessor: "Charges",
  },
  {
    Header: "STATUS",
    accessor: "Type",
  },
];
