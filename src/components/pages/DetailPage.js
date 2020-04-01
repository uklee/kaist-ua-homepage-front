import React from "react";

import { Header, Footer } from "../organisms";
import { DetailPageContent } from "../templates";

const DetailPage = () => {
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
      <DetailPageContent />
      <Footer />
    </div>
  );
};

export default DetailPage;
