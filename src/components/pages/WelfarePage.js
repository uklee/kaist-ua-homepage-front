import React from "react";

import { Header, Footer } from "../organisms";
import BoardContentContainer from "../containers/board/BoardContentContainer";
import BoardContentContainer2 from "../containers/board/BoardContentContainer2";

const WelfarePage = () => {
  return (
    <div
      style={{ minHeight: "100vh", fontFamily: "NanumSquare" }}
      className="d-flex flex-column"
    >
      <Header active={"welfare"} />
      <div
        style={{ minHeight: "100vh", fontFamily: "NanumSquare" }}
        className="d-flex flex-row"
      >
        <div style={{
          width: "50%",
          minWidth: "320px",
          padding: "0 2vh",
        }}>
          <BoardContentContainer boardId={"2"} />
        </div>
        <div style={{
          width: "50%",
          minWidth: "320px",
          padding: "0 2vh",
        }}>
          <BoardContentContainer2 boardId={"3"} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WelfarePage;
