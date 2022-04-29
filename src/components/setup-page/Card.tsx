import React, { Dispatch, SetStateAction } from "react";
import styles from "./styles/Card.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Card: React.FC<{
  isExpanded: boolean;
  onExpand: (isExpanded: boolean) => void;
  title: string;
}> = (props) => {
  const onClickHandler = () => {
    props.onExpand(!props.isExpanded);
  };

  return (
    <div>
      <div className={styles._header} onClick={onClickHandler}>
        {!props.isExpanded && <ArrowForwardIosIcon id={styles.ficons} />}
        {props.isExpanded && <ArrowForwardIosIcon id={styles.bicons} />}
        <div className={styles._ui_title}>{props.title}</div>
      </div>
    </div>
  );
};

export default Card;
