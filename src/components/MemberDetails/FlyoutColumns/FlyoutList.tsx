import React, { useState, useEffect } from "react";
import FlyoutItem from "./FlyoutItem";
import { ColumnInstance } from "react-table";
import { Checkbox } from "@mbkit/checkbox";
import classes from "./FlyoutItem.module.scss";
import styles from "./FlyoutList.module.scss";

type FlyoutType = {
   columns: ColumnInstance<{
    Name: string;
    Class: string;
    Date: string;
    Pricing: string;
    Cancel: number;
    Waive: number;
    Charges: number;
    Apply: boolean;
    Type: string;
  }>[]
}

const FlyoutList = (props: FlyoutType) => {
  const [isCheckAll, setIsCheckAll] = useState(true);
  const [list, setList] = useState<
    ColumnInstance<{
      Name: string;
      Class: string;
      Date: string;
      Pricing: string;
      Cancel: number;
      Waive: number;
      Charges: number;
      Apply: boolean;
      Type: string;
    }>[]
  >([]);

  const [isCheck, setIsCheck] = useState<string[]>(props.columns.map((li) => li.id));

  // const isSelectAllHandler = () => {
  //   setIsCheckAll(!isCheckAll);
  //   setIsCheck(list.map((li) => li.id));
  //   if (isCheckAll) {
  //     setIsCheck([]);
  //   }
  //   console.log("Select all clicked");
  // };

  useEffect(() => {
    setList(props.columns);
  }, [list]);

  const isCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    const { id, checked } = event.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
  
  return (
    <div className={styles.list}>
      {/* <div className={classes.item_div}>
        <Checkbox
          {...props.hideAll()}
          onChange={isSelectAllHandler}
          checked={isCheckAll}
        />
        <label className={classes.item_label}>Select All</label>
      </div> */}
      {props.columns.map((column) => {
        var isDisable = false;
        if (
          column.Header === "NAME" ||
          column.Header === "CHARGES" ||
          column.Header === "FEE TYPE"
        ) {
          isDisable = true;
        }
        var headerString: any = column.Header || "";

        return (
          <div key={column.id}>
            {/* <FlyoutItem item={column} /> */}
            <div className={styles.item_div}>
              <Checkbox
                {...column.getToggleHiddenProps()}
                id={column.id}
                onClick={isCheckHandler}
                disabled={isDisable}
                checked={isCheck.includes(column.id)}
              />
              <label className={styles.item_label}>
                {headerString.charAt(0) + headerString.slice(1).toLowerCase()}
              </label>
            </div>
            <hr className={styles.line}></hr>
          </div>
        );
      })}
    </div>
  );
};

export default FlyoutList;
