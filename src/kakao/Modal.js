import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import Map from "./Map";

function Modal(props) {
  const { onClose, searchValue, open } = props;
  console.log("modal: " + searchValue);
  const handleClose = () => {
    onClose(searchValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <Map search={searchValue} />
    </Dialog>
  );
}

export default Modal;
