import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import Map from "./Map";

function Modal(props) {
  const { onClose, searchValue, open } = props;
  console.log("modal: " + searchValue);
  const handleClose = (value) => {
    console.log("modal 종료: 1");
    console.log(value);
    onClose(value);
  };

  const handleListItemClick = (value) => {
    console.log("modal 종료: 2");
    console.log(value);
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <Map search={searchValue} open={open} onClose={handleClose} />
    </Dialog>
  );
}

export default Modal;
