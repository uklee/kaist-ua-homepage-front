import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";

import "./HomeContent.scss";
import { HomeCarousel, BoardModule } from "../organisms";
import { isEmpty } from "lodash";

const HomeContent = ({ BoardModuleInfos }) => {
  let boardModules;
  if (!BoardModuleInfos || isEmpty(BoardModuleInfos))
    boardModules = <Spinner animation="border" />;

  boardModules = BoardModuleInfos.map(boardModuleInfo => (
    <Col key={boardModuleInfo.board.id} lg="6">
      <BoardModule
        posts={boardModuleInfo.aboutPosts.posts}
        className="module"
        boardModuleName={boardModuleInfo.board.title}
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
