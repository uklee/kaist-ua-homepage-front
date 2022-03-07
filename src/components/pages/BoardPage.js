import React from "react";

import { Header, Footer } from "../organisms";
import BoardContentContainer from "../containers/board/BoardContentContainer";

const BoardPage = props => {
  const { boardId } = props.match.params;
  return (
    <div
      style={{ minHeight: "100vh", fontFamily: "NanumSquare" }}
      className="d-flex flex-column"
    >
      <Header active={boardId} />
      <BoardContentContainer boardId={boardId} />
      <Footer />
    </div>
  );
};

export default BoardPage;
