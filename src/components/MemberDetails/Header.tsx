import React from "react";
import classes from "./Header.module.scss";
import { Select } from "@mbkit/select";
import { Button } from "@mbkit/button";

const Header: React.FC<{onApply: () => void }> = (props) => {
  const applyButtonHandler = () => {
    console.log("Clicked...");
    props.onApply();
  }
  return (
    <div className={classes.display_header}>
      <div className={classes.member_label}>
        <text className={classes.member_details}>Member Details</text>
      </div>
      <div className={classes.action_div}>
        <Select
          className={classes.filter}
          value="Apple"
          onChange={() => console.log(1)}
        >
          <option className={classes.filter_display} value="">
            Filters
          </option>
          <option className={classes.filter_display} value="">
            Filters
          </option>
        </Select>
        <Button variant="secondary" className={classes.button_apply} onClick={applyButtonHandler}>
          <label className={classes.button_label}>Apply Charges</label>
        </Button>
      </div>
    </div>
  );
};

export default Header;
