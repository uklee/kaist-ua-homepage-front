import React from "react";
import { Container } from "react-bootstrap";
import { EditorHeader, EditorFooter } from "../organisms";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./EditorContent.scss";

const EditorContent = () => {
  return (
    <Container className="flex-grow-1 border my-5">
      <EditorHeader />
      <div className="flex-1 px-5 pt-3">
        <Editor
          wrapperClassName="border mb-3"
          editorClassName="border Editor"
        />
      </div>
      <EditorFooter />
    </Container>
  );
};

export default EditorContent;
