import React from "react";
import styles from "./Styles/Header.module.scss";
import SortIcon from "@mui/icons-material/Sort";
import InfoIcon from "@mui/icons-material/Info";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.one}>
        <div className={styles.label}>Types of Membership</div>
        <SortIcon id={styles.icon} />
      </div>
      <div className={styles.two}>
        <div className={styles.label}>No Show</div>
        <InfoIcon id={styles.icon} />
        <SortIcon id={styles.icon} />
      </div>
      <div className={styles.three}>
        <div className={styles.label}>Fee Waived</div>
        <InfoIcon id={styles.icon} />
        <SortIcon id={styles.icon} />
      </div>
      <div className={styles.four}>
        <div className={styles.label}>Late Cancel</div>
        <InfoIcon id={styles.icon} />
        <SortIcon id={styles.icon} />
      </div>
      <div className={styles.five}>
        <div className={styles.label}>Fee Waived</div>
        <InfoIcon id={styles.icon} />
        <SortIcon id={styles.icon} />
      </div>
    </div>
  );
};

export default Header;
