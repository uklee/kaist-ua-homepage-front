import React from "react";

import { Header, Footer } from "../organisms";
import { DetailPageContent } from "../templates";
import { withRouter } from "react-router-dom";

const DetailPage = ({ match }) => {
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
      <DetailPageContent postId={postId} />
      <Footer />
    </div>
  );
};

export default withRouter(DetailPage);
