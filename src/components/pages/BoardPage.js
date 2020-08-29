import React from "react";

import { Header, Footer } from "../organisms";
import BoardContainer from "../containers/board/BoardContainer";

const BoardPage = props => {
  const { boardId } = props.match.params;
  return (
    <div
      style={{ minHeight: "100vh", fontFamily: "NanumSquare" }}
      className="d-flex flex-column"
    >
      <Header active={boardId} />
      <BoardContainer boardId={boardId} />
      <Footer />
    </div>
  );
};

export default BoardPage;
