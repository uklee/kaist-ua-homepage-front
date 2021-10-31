import React from "react";
import { Header, Footer } from "../organisms";
import EditorContentContainer from "../containers/editor/EditorContentContainer";

const EditPage = props => {
  const { boardId, postId } = props.match.params;
  return (
    <div
      style={{
        minHeight: "100vh",
        // backgroundColor: "#eee",
        fontFamily: "NanumSquare"
      }}
      className="d-flex flex-column"
    >
      <Header active={boardId} />
      <EditorContentContainer boardId={boardId} postId={postId} />
      <Footer />
    </div>
  );
};

export default EditPage;
