import React from "react";
import { Button, Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const CustomModal = ({
  show,
  title,
  body,
  handleClose,
  handleConfirm,
  centered,
  closeMessage,
  confirmMessage
}) => {
  const modalBody = body ? <Modal.Body>{body}</Modal.Body> : null;
  const cancelButton = closeMessage ? (
    <Button variant="secondary" onClick={handleClose}>
      {closeMessage}
    </Button>
  ) : null;
  const confirmButton = confirmMessage ? (
    <Button onClick={handleConfirm}>{confirmMessage}</Button>
  ) : null;
  return (
    <Modal centered={centered} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      {modalBody}
      <Modal.Footer>
        {cancelButton}
        {confirmButton}
      </Modal.Footer>
    </Modal>
  );
};

export default withRouter(CustomModal);
