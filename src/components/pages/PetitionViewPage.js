import React from "react";

import { Header, Footer } from "../organisms";
import PostViewerContainer from "../containers/viewer/PostViewerContainer";
import { withRouter } from "react-router-dom";

const PetitionViewPage = ({ match }) => {
  const { petitionId } = match.params;

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
      <PostViewerContainer petitionId={petitionId} />
      <Footer />
    </div>
  );
};

export default withRouter(PetitionViewPage);
