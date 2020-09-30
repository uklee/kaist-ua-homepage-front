import React from "react";
import { Form } from "react-bootstrap";

const EditorFormGroup = ({ label, value, onChange, as, placeholder }) => {
  return (
    <Form.Group as={as} className="align-items-center">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className="flex-1"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Form.Group>
  );
};

export default EditorFormGroup;
