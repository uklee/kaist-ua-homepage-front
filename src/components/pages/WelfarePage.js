import React from "react";

import { Header, Footer } from "../organisms";
import BoardContentContainer from "../containers/board/BoardContentContainer";
import BoardContentContainer2 from "../containers/board/BoardContentContainer2";
import "./WelfarePage.scss"
const WelfarePage = () => {
  return (
    <div
      style={{ minHeight: "100vh", fontFamily: "NanumSquare" }}
      className="d-flex flex-column"
    >
      <Header active={"welfare"} />
      <div
        style={{ minHeight: "100vh", fontFamily: "NanumSquare" }}
        className="d-flex flex-row" id="welfareContainer"
      >
        <div id="welfare">
          <BoardContentContainer boardId={"2"} />
        </div>
        <div id="welfare">
          <BoardContentContainer2 boardId={"3"} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WelfarePage;
