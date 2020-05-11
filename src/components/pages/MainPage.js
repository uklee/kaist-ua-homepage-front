import React from "react";

import { Header, Footer } from "../organisms";
import HomeContentContainer from "../containers/home/HomeContentContainer";

const MainPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "NanumSquare"
      }}
      className="d-flex flex-column"
    >
      <Header />
      <HomeContentContainer />
      <Footer />
    </div>
  );
};

export default MainPage;
