import React, { useContext, useState } from "react";
import FlyoutList from "./FlyoutList";
import styles from './FlyoutColumns.module.scss';
import FlyoutContext from "../../store/flyout-context";
import { Column, ColumnInstance } from "react-table";
import { TableColumns } from "../MemberTable/column";

const FlyoutColumns = (props: any) => {
  const flyoutCtx = useContext(FlyoutContext);

  return (
    <div className={styles.flyout_div}>
      <FlyoutList columns={props.columns} />
    </div>
  );
};

export default FlyoutColumns;
