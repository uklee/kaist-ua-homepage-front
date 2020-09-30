import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import "./Editor.scss";

const Editor = ({ onChangeField, placeholder, keyName }) => {
  const korContentQuill = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(korContentQuill.current, {
      theme: "bubble",
      placeholder,
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
        onChangeField({ key: keyName, value: quill.root.innerHTML });
    });
  }, [onChangeField, keyName, placeholder]);

  return (
    <Container className="border-bottom" style={{ height: "300px" }}>
      <div ref={korContentQuill} />
    </Container>
  );
};

export default Editor;
