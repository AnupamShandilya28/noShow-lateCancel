import React, { useState } from "react";
import styles from "./ManageClass.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ManageClassTable from "./ManageClassTable";

const ManageClass = () => {
  const [editClasses, setEditClasses] = useState(false);
  return (
    <div className="manage_class">
      <div
        className={styles.manage_class_header}
        onClick={() => {
          setEditClasses(!editClasses);
        }}
      >
        <ArrowForwardIosIcon className={styles.icons} />
        <div className={styles.manage_class_ui_title}>Manage Classes</div>
      </div>

      {editClasses === true && (
        // <div className={styles.edit_manage_class}>
        <ManageClassTable />
        // </div>
      )}
    </div>
  );
};

export default ManageClass;
