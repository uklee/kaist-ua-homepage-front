import React from "react";
import { Button, Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const CustomModal = ({ show, title, body, handleClose, handleConfirm }) => {
  const modalBody = body ? <Modal.Body>{body}</Modal.Body> : null;
  const cancelButton = handleClose ? (
    <Button variant="secondary" onClick={handleClose}>
      취소
    </Button>
  ) : null;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      {modalBody}
      <Modal.Footer>
        {cancelButton}
        <Button variant="primary" onClick={handleConfirm}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default withRouter(CustomModal);
