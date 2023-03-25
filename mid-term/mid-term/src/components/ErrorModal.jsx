import React from "react";
import classes from "./ErrorModal.module.css";

const Layer = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};
const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      <Layer onConfirm={props.onConfirm}></Layer>
      <Modal title={props.error.title} message={props.error.message}></Modal>
    </>
  );
};

export default ErrorModal;
