import React from "react";

import { Header, Footer } from "../organisms";
import PostViewerContainer from "../containers/viewer/PostViewerContainer";
import { withRouter } from "react-router-dom";

const PostViewPage = ({ match }) => {
  const { postId } = match.params;

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
      <PostViewerContainer postId={postId} />
      <Footer />
    </div>
  );
};

export default withRouter(PostViewPage);
