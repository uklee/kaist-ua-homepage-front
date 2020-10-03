import React from "react";
import { Form } from "react-bootstrap";

const EditorFormGroup = ({
  label,
  value,
  onChange,
  groupAs,
  controlAs,
  rows,
  placeholder
}) => {
  return (
    <Form.Group as={groupAs} className="align-items-center">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className="flex-1"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        as={controlAs}
        rows={rows}
      />
    </Form.Group>
  );
};

export default EditorFormGroup;
