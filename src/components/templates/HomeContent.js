import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./HomeContent.scss";
import { HomeCarousel, BoardModule } from "../organisms";
import { isEmpty } from "lodash";

const HomeContent = ({ BoardInfos }) => {
  if (!BoardInfos) return <div>로딩중...</div>;

  const boards = isEmpty(BoardInfos) ? (
    <Col lg="6">
      <BoardModule />
    </Col>
  ) : (
    BoardInfos.map(boardInfo => (
      <Col lg="6">
        <BoardModule
          posts={boardInfo.aboutPosts.posts}
          className="module"
          boardName={boardInfo.bulletin.title}
          bulletinId={boardInfo.bulletin.id}
        />
      </Col>
    ))
  );

  return (
    <Container className="flex-grow-1 home-content">
      <HomeCarousel className="module" />
      <Row>{boards}</Row>
    </Container>
  );
};

export default HomeContent;
