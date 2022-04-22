import { useStoryContext } from "@storybook/addons";
import React, { useState } from "react";
import styles from "./Content.module.scss";

const Content = (props:any) => {

  const[showLoader,setShowLoader] = useState(true);
  return (
    
    <div className={styles.main2} onClick={props.onCancel}>
      {/* {showLoader && <p>Loading...</p>} */}
      
      <p>Content</p>
    </div>
  );
};

export default Content;
