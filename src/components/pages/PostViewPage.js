import React from "react";

import { Header, Footer } from "../organisms";
import PostViewerContainer from "../containers/viewer/PostViewerContainer";
import { withRouter } from "react-router-dom";

const PostViewPage = ({ match, history }) => {
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
      <PostViewerContainer history={history} postId={postId} />
      <Footer />
    </div>
  );
};

export default withRouter(PostViewPage);
