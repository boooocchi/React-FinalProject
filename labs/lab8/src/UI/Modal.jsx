import React, { useEffect, useRef } from "react";
import styles from "@/style/Modal.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";

const Modal = (props) => {
  const handleUpdateSubmit = () => {
    props.onSaveHandleUpdate(inputRef);
  };

  const inputRef = useRef();
  const modalRef = useRef();
  useClickOutside(modalRef, props.editState, () => props.setShowModal(false));

  return (
    <div className={styles.overlay}>
      <div ref={modalRef} className={styles.modal}>
        <div className={styles.modalContent}>
          <input ref={inputRef} type="text" defaultValue={props.todo.title} />
          <button onClick={handleUpdateSubmit}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
