import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import "./Editor.scss";

const Editor = ({ onChangeField, content }) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "내용을 작성하세요...",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }, { header: "3" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"]
        ]
      }
    });

    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user")
        onChangeField({ key: "content", value: quill.root.innerHTML });
    });
  }, [onChangeField]);

  return (
    <Container style={{ height: "300px" }}>
      <div ref={quillElement} />
    </Container>
  );
};

export default Editor;
