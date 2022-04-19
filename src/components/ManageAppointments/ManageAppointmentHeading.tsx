import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "./ManageAppointmentHeading.module.scss"
import React from 'react';

const ManageAppointmentHeading = ()=>{
    // const [showscreen,setshowscreen]=useState(false);
    
    return <div id={styles.heading_outerdivstyle}>
        <div className={styles.heading_divstyle}>
           <ArrowForwardIosIcon/>  
           <span id={styles.heading_headingstyle}>Manage Appointments</span>   
        </div>
    </div>
}
export default ManageAppointmentHeading;