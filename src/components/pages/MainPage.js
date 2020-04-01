import React from "react";

import { Header, Footer } from "../organisms";
import { HomeContent } from "../templates";

const MainPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#eee",
        fontFamily: "NanumSquare"
      }}
      className="d-flex flex-column"
    >
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default MainPage;
