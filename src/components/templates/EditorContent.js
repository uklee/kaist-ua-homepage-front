import React from "react";
import { Container } from "react-bootstrap";
import { EditorHeader, EditorFooter } from "../organisms";
import { Editor } from "../organisms";

import "./EditorContent.scss";

const EditorContent = ({
  onChangeField,
  onWrite,
  onCancel,
  content,
  title,
  author,
  boards,
  boardId
}) => {
  return (
    <Container className="flex-grow-1 border my-5">
      <EditorHeader
        onChangeField={onChangeField}
        boards={boards}
        boardId={boardId}
        title={title}
        author={author}
      />
      <Editor onChangeField={onChangeField} content={content} />
      <EditorFooter onWrite={onWrite} onCancel={onCancel} />
    </Container>
  );
};

export default EditorContent;
