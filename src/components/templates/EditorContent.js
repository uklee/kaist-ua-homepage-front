import React from "react";
import { Container } from "react-bootstrap";
import { EditorHeader, EditorFooter } from "../organisms";
import { Editor } from "../organisms";

import "./EditorContent.scss";

const EditorContent = () => {
  return (
    <Container className="flex-grow-1 border my-5">
      <EditorHeader />
      <Editor />
      <EditorFooter />
    </Container>
  );
};

export default EditorContent;
