import React from "react";
import { Container, Button } from "react-bootstrap";

const EditorFooter = ({ onCancel, onWrite }) => {
  return (
    <Container className="border-top">
      <div className="d-flex justify-content-end py-3">
        <Button onClick={onWrite} className="mr-3">
          작성 완료
        </Button>
        <Button onClick={onCancel}>취소</Button>
      </div>
    </Container>
  );
};

export default EditorFooter;
