import React from "react";
import { Header, Footer } from "../organisms";
import EditorContentContainer from "../containers/editor/EditorContentContainer";

const EditPage = props => {
  const { boardId } = props.match.params;
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
      <EditorContentContainer boardId={boardId} />
      <Footer />
    </div>
  );
};

export default EditPage;
