import React, { useState } from "react";
import styles from "./Styles/Entry.module.scss";
import { Checkbox } from "@mbkit/checkbox";
import Row from './API/model'

const Entry: React.FC<{item:Row}> = (props) => {
  const [lateCancel, setLateCancel] = useState(false);
  const [noShow, setNoShow] = useState(false);
  const [lateCancelInput, setLateCancelInput] = useState("");
  const [nowShowInput, setNoShowInput] = useState("");

  const changeNoShowInputHandler =(event: React.ChangeEvent<HTMLInputElement>)=>{
      setNoShowInput(event.target.value)
  }
  const changeLateCancelHandler=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setLateCancelInput(event.target.value)
  }
  const changeStateLateCancel = () => {
    setLateCancel(!lateCancel);
    setLateCancelInput('')
  };
  const changeStateNoShow = () => {
    setNoShow(!noShow);
    setNoShowInput('')
  };
  return (
    
    <div className={styles.main}>
      <div className={styles.title}>
        <div className={styles.label}>{props.item.label}</div>
      </div>
      <div className={styles.one}>
        <div>
          <Checkbox checked={noShow} onChange={changeStateNoShow} />
        </div>
        <div className={styles.side}>Enable</div>
      </div>
      <div className={styles.two}>
        <div>
          <input
            // disabled={!noShow ? "disabled" : ""}
            disabled={!noShow ? true : false}
            size={2}
            className={styles.input}
            onChange={changeNoShowInputHandler}
            value={nowShowInput}
          />
        </div>
        <div className={styles.side}>Times</div>
      </div>
      <div className={styles.three}>
        <div>
          <Checkbox checked={lateCancel} onChange={changeStateLateCancel} />
        </div>
        <div className={styles.side}>Enable</div>
      </div>
      <div className={styles.four}>
        <div>
          <input
            // disabled={!lateCancel ? "disabled" : ""}
            disabled={!lateCancel ? true :false}
            size={2}
            className={styles.input}
            onChange={changeLateCancelHandler}
            value={lateCancelInput}
          />
        </div>
        <div className={styles.side}>Times</div>
      </div>
    </div>
  );
};

export default Entry;
