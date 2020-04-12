import React from "react";

import { Header, Footer } from "../organisms";
import { DetailPageContent } from "../templates";

const DetailPage = ({ match }) => {
  const { postId } = match.props;

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

export default DetailPage;
