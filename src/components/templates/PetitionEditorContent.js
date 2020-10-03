import React from "react";

import { Container } from "react-bootstrap";

import { PetitionEditor, EditorFooter } from "../organisms";
import { BoardHeader } from "../molecules";

import "./EditorContent.scss";

const PetitionEditorContent = ({ onChangeField, onWrite, onCancel }) => {
  return (
    <Container className="flex-grow-1 board-content">
      <BoardHeader
        title={{ korTitle: "학생 청원", engTitle: "Student Petition" }}
      />
      <PetitionEditor onChangeField={onChangeField} />
      <EditorFooter onWrite={onWrite} onCancel={onCancel} />
    </Container>
  );
};

export default PetitionEditorContent;
