import styles from "./EntryCell.module.scss";
import { Checkbox } from "@mbkit/checkbox";

export const COLUMNS = [
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

    /*Cell: (row) => {
      return (
        <div className={styles.type_div}>
          <Checkbox checked={true} />
          <label className={styles.type_label}>{row.cell.render("")}</label>
            
        </div>
      );
    },*/
  },

];
