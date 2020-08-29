import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./HomeContent.scss";
import { HomeCarousel, BoardModule } from "../organisms";
// import { isEmpty } from "lodash";

const HomeContent = ({ BoardModuleInfos }) => {
  const boardModules = BoardModuleInfos.map(boardModuleInfo => (
    <Col key={boardModuleInfo.board.id} lg="6">
      <BoardModule
        posts={boardModuleInfo.posts}
        className="module"
        boardModuleName={boardModuleInfo.board.korTitle}
        boardId={boardModuleInfo.board.id}
      />
    </Col>
  ));

  return (
    <Container className="flex-grow-1 home-content">
      <HomeCarousel className="module" />
      <Row>{boardModules}</Row>
    </Container>
  );
};

export default HomeContent;
