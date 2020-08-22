import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";

import "./HomeContent.scss";
import { HomeCarousel, BoardModule } from "../organisms";
import { isEmpty } from "lodash";

const HomeContent = ({ BoardInfos }) => {
  let boards;
  if (!BoardInfos || isEmpty(BoardInfos))
    boards = <Spinner animation="border" />;

  boards = BoardInfos.map(boardInfo => (
    <Col key={boardInfo.bulletin.id} lg="6">
      <BoardModule
        posts={boardInfo.aboutPosts.posts}
        className="module"
        boardName={boardInfo.bulletin.title}
        bulletinId={boardInfo.bulletin.id}
      />
    </Col>
  ));

  return (
    <Container className="flex-grow-1 home-content">
      <HomeCarousel className="module" />
      <Row>{boards}</Row>
    </Container>
  );
};

export default HomeContent;
