import React, { useState } from "react";
import { Button } from "@mbkit/button";
//import { Dialog } from "@mbkit/dialog";

import styles from "./ApplyChargesModal.module.css";
import Modal from "./Modal";

type Props = {
  onClose: () => void,
  onConfirm(arg: boolean): void
}

const ApplyChargesModal: React.FC<Props> = (props) => {
  return (
    <Modal onClose={props.onClose}>
          <div className={styles.modal_content}>
            <p className={styles.modal_heading}>Apply Charges</p>
            <p className={styles.modal_text}>
              Do you want to apply No-show/Late Cancel charges to the selected
              classes/services?
            </p>
            <div className={styles.actions}>
              <Button variant="simpleText" onClick={() => props.onConfirm(false)}>No, Cancel</Button>
              <Button variant="secondary" onClick={() => props.onConfirm(true)}>Yes, Apply</Button>
            </div>
          </div>
    </Modal>
  );
};

export default ApplyChargesModal;
