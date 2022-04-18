import React, { Component, useState } from 'react';
import styles from './App.module.scss';
import ManageAppointmentHeading from './components/ManageAppointments/ManageAppointmentHeading';
import { Accordion, AccordionHeader, AccordionItem, AccordionPane } from "@mbkit/accordion";
import ManageAppointments from './components/ManageAppointments/ManageAppointments';

export const App = () => {        
    return (   
        <div id={styles.heading_outerdivstyle}>        
            <ManageAppointmentHeading/>     
            <ManageAppointments/>
        </div>
    );
};
export default App;
