import React from "react";
import { useSelector } from "react-redux";

import { Container } from "react-bootstrap";

import { EditorHeader, EditorFooter, Editor } from "../organisms";
import { BoardHeader } from "../molecules";

import "./EditorContent.scss";

const EditorContent = ({ onChangeField, onWrite, onCancel }) => {
  const board = useSelector(({ boards }) => boards.board);
  return (
    <Container className="flex-grow-1 board-content">
      <BoardHeader title={board} description="글 작성" />
      <EditorHeader onChangeField={onChangeField} />
      <Editor
        onChangeField={onChangeField}
        placeholder="한글 내용을 작성하세요..."
        keyName="korContent"
      />
      <Editor
        onChangeField={onChangeField}
        placeholder="영문 내용을 작성하세요..."
        keyName="engContent"
      />
      <EditorFooter onWrite={onWrite} onCancel={onCancel} />
    </Container>
  );
};

export default EditorContent;
