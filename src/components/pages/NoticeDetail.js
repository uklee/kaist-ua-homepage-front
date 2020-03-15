import React from "react";

import { Header, Footer } from "../organisms";
import { NoticeDetailContent } from "../templates";

const NoticeDetail = () => {
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
      <NoticeDetailContent />
      <Footer />
    </div>
  );
};

export default NoticeDetail;
