import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import SortIcon from '@mui/icons-material/Sort';
import {BasicTable} from "./BasicTable";
import styles from "./MemberTable.module.scss";
import { PaginationTable } from "./PaginationTable";


const MemberTable = () => {
  
  return (
    <div className={styles.main_table}>
     
      <PaginationTable />
    </div>
  );
};

export default MemberTable;
