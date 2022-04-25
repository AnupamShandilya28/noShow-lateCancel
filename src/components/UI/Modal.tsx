import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

type OverlayProps = {
  children: JSX.Element
}

type ModalProps = {
  onClose: () => void,
  children: JSX.Element
}

const Backdrop: React.FC<{onClose: () => void}> = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
}

const ModalOverlay: React.FC<OverlayProps> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modal_box}>
        {props.children}
      </div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        portalElement !
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement !
      )}
    </React.Fragment>
  );
};

export default Modal;
