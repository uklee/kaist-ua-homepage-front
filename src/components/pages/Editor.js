import React from "react";

import { Header, Footer } from "../organisms";
import { EditorContent } from "../templates";

const Editor = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        // backgroundColor: "#eee",
        fontFamily: "NanumSquare"
      }}
      className="d-flex flex-column"
    >
      <Header notice={true} />
      <EditorContent />
      <Footer />
    </div>
  );
};

export default Editor;
