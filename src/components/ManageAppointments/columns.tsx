import MOCK_DATA from "../../data/manageAppointments/MOCK_DATA.json";
import { Checkbox } from "@mbkit/checkbox";
import { Input } from "@mbkit/input";
import { Tipsy } from "@mbkit/tipsy";
import React, { useState } from "react";
import styles from "./styles/ManageAppointments.module.scss"
import InfoIcon from "@mui/icons-material/Info";

const onLateCancelHandler = () => {
  // setIslateCancel(!isLateCancel);
  // setLateCancelChargeInput(0);
};
const onNoShowHandler = () => {
  // setIsNoShow(!isNoShow);
  // setNoShowChargeInput(0);
};
const checkValidity = (value: string): boolean => {
  for (let i = 0; i < value.length; i++) {
    if (!(value[i] >= "0" && value[i] <= "9")) return false;
  }
  return true;
};
const onTimeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (!checkValidity(event.target.value)) return;
  // setTimeInput(event.target.value);
};
const onLateCancelChargeHandler = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  if (!checkValidity(event.target.value)) return;
  // setLateCancelChargeInput(event.target.value);
};
const onNoShowChargeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (!checkValidity(event.target.value)) return;
  // setNoShowChargeInput(event.target.value);
};
export const COLUMNS = [
  {
    Header: "TYPE",
    accessor: "TYPE",
  },
  {
    Header: (
      <>
        <span>TIME (PRIOR TO CLASS)</span>
        <Tipsy
          position="top-center"
          label={
            <>
              This is the time for cancelation before the class.
              <br />
              You can update this time from Cancelation Window
            </>
          }
        >
          <span>
            <InfoIcon id={styles.infoicon} />
          </span>
        </Tipsy>
      </>
    ),
    accessor: "TIME",
    Cell: (
      {value}:{value:any}
    ) => {
      return (
        <div>
          <Input value={value} onChange={onTimeChangeHandler} />
          <span>Minutes (Prior to class)</span>
        </div>
      );
    },
  },
  {
    // Header: "LATE CANCEL",
    Header: (
      <>
        <span>LATE CANCEL</span>
        <Tipsy
          position="top-center"
          label="Don't put anything critical to getting the task at hand complete in here"
        >
          <span>
            <InfoIcon id={styles.infoicon} />
          </span>
        </Tipsy>
      </>
    ),
    accessor: (rowData: { status: boolean | undefined; }, rowIndex:  number) => {
        return (
          <input
            type="checkbox"
            checked={rowData.status}
            onClick={() => {
              const tmpData = [...data];
              tmpData[rowIndex].LATECANCEL = !tmpData[rowIndex].LATECANCEL;
              setData(tmpData);
            }}
          />
        )    
    }
  },
  {
    Header: "CHARGES",    
    accessor: "CHARGES_LC",
    Cell: (
      value: (string | number | readonly string[] | undefined) & string
    ) => {
      return (
        <div>
          <Input
            onChange={onLateCancelChargeHandler}
            type="string"
            value={value}
            // disabled={!isLateCancel}
          />
        </div>
      );
    },
  },
  {
    Header: (
      <>
        <span>NO SHOW</span>
        <Tipsy
          position="top-center"
          label={
            <>
              If the consumer didn't cancel and was not present.
              <br />
              Apply the required charges.
            </>
          }
        >
          <span>
            <InfoIcon id={styles.infoicon} />
          </span>
        </Tipsy>
      </>
    ),
    accessor: "NOSHOW",
    Cell: (value: boolean) => {
      return (
        <div>
          <Checkbox checked={value} onChange={onNoShowHandler}></Checkbox>
          <span>Enable</span>
        </div>
      );
    },
  },
  {
    Header: "CHARGES",
    accessor: "CHARGES_NS",
    Cell: (
      value: (string | number | readonly string[] | undefined) & string
    ) => {
      return (
        <div>
          <Input
            value={value}
            onChange={onNoShowChargeHandler}
            type="text"
            // disabled={!isNoShow}
          />
        </div>
      );
    },
  },
];


const [data, setData] = useState(MOCK_DATA);