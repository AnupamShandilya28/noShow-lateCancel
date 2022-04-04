//import { Checkbox } from "@mui/material";
import React from "react";
import styles from "./MemberEntry.module.scss";
import { Checkbox } from "@mbkit/checkbox";
import { useState, useEffect } from "react";

const MemberEntry = (props) => {

  const [isCheck, setIsCheck] = useState(props.apply);
  //setIsCheck(props.apply);
  
  const isCheckHandler = () =>{
    setIsCheck(!isCheck);
  }

  useEffect(()=>{
    setIsCheck(isCheck);
  }, [isCheck])

  return (<div>
    <div className={styles.entry_div}>
    <div className={styles.entry_name}><div className={styles.name_div}><label className={styles.name_label}>{props.name}</label></div></div>
    <div className={styles.entry_class}><div className={styles.class_div}><label className={styles.class_label}>{props.class}</label></div></div>
    <div className={styles.entry_date}><div className={styles.class_div}><label className={styles.date_label}>{props.date}</label></div></div>
    <div className={styles.entry_pricing}><div className={styles.class_div}><label className={styles.pricing_label}>{props.price}</label></div></div>
    <div className={styles.entry_cancel}><div className={styles.cancel_div}><label className={styles.cancel_label}>{props.cancel}</label></div></div>
    <div className={styles.entry_waive}><div className={styles.cancel_div}><label className={styles.cancel_label}>{props.waive}</label></div></div>
    <div className={styles.entry_charges}><div className={styles.charges_div}><label className={styles.charges_label}>${props.charges}</label></div></div>
    <div className={styles.entry_type}><div className={styles.type_div}><Checkbox className={styles.type_checkbox} checked={isCheck} onClick={isCheckHandler}/><label className={styles.type_label}>{props.type}</label></div></div>
    </div>
  </div>);
};

export default MemberEntry;
