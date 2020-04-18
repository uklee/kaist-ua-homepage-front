import React from "react";
import { Header, Footer } from "../organisms";
import EditorContentContainer from "../containers/editor/EditorContentContainer";

const EditPage = () => {
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
      <EditorContentContainer />
      <Footer />
    </div>
  );
};

export default EditPage;
