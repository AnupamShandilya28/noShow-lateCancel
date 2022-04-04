import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import SortIcon from '@mui/icons-material/Sort';

import styles from "./MemberTable.module.scss";

const MemberTable = () => {
  
  return (
    <div className={styles.main_table}>
      <div className={styles.header}>
        <div className={styles.header_1}>
            <header className={styles.label_1}>NAME</header>
            <SortIcon id="icon_1" style={{color: '#BDBDBD'}}/>
        </div>
        <div className={styles.header_2}>
            <header className={styles.label_2}>CLASSES / APPOINTMENTS</header>
            <SortIcon id="icon_2" style={{color: '#BDBDBD'}}/>
        </div>
        <div className={styles.header_3}>
            <header className={styles.label_3}>DATE & TIME</header>
            <SortIcon id="icon_3" style={{color: '#BDBDBD'}}/>
        </div>
        <div className={styles.header_4}>
            <header className={styles.label_4}>PRICING OPTION</header>
            <SortIcon id="icon_4" style={{color: '#BDBDBD'}}/>
        </div>
        <div className={styles.header_5}>
            <header className={styles.label_5}>NO-SHOW/LATE</header>
            <SortIcon id="icon_5" style={{color: '#BDBDBD'}}/>
        </div>
        <div className={styles.header_6}>
            <header className={styles.label_6}>FEE WAIVED</header>
            <SortIcon id="icon_6" style={{color: '#BDBDBD'}}/>
        </div>
        <div className={styles.header_7}>
            <header className={styles.label_7}>CHARGES</header>
            <SortIcon id="icon_7" style={{color: '#BDBDBD'}}/>
        </div>
        <div className={styles.header_8}>
            <header className={styles.label_8}>FEE TYPE</header>
            <img className={styles.info_icon} src="https://img.icons8.com/ios-glyphs/30/000000/info--v1.png"/>
            <SortIcon id="icon_8" style={{color: '#BDBDBD'}}/>
        </div>
        <div className={styles.header_9}>
            <SettingsIcon id={styles.search_icon} style={{color: '#696C74'}}/>
        </div>
      </div>
    </div>
  );
};

export default MemberTable;
