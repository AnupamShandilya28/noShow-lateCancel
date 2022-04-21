import React, { Dispatch, SetStateAction } from "react";
import styles from "./Card.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Card:React.FC<{managestate:{manageClasses:boolean,manageFee:boolean,manageAppointment:boolean},setmanagestate:Dispatch<SetStateAction<{ manageClasses: boolean; manageFee: boolean; manageAppointment: boolean; }>>,title:string}> =(props)=>{
  
  const onClickHandler=()=>{
      if(props.title==="Manage Classes")
      {
          props.setmanagestate(
          {manageClasses:true,manageFee:false,manageAppointment:false}
          )
      }
      if(props.title==="Manage Appointments")
      {
          props.setmanagestate(
          {manageClasses:false,manageFee:false,manageAppointment:true}
          )
      }
      if(props.title==="Manage Fee Waived")
      {        
          props.setmanagestate(
          {manageClasses:false,manageFee:true,manageAppointment:false}
          )
      }

    }
  
    return (
    <div>
      <div
        className={styles._header}
        onClick={onClickHandler}
      >
        <ArrowForwardIosIcon className={styles.icons} />
        <div className={styles._ui_title}>{props.title}</div>
      </div>
    </div>
  );
}

export default Card;