import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./HomeContent.scss";
import { HomeCarousel, BoardModule } from "../organisms";

const HomeContent = () => {
  return (
    <Container className="flex-grow-1 home-content">
      <HomeCarousel className="module" />
      <Row>
        <Col lg="6">
          <BoardModule className="module" boardName="공지사항" />
        </Col>
        <Col lg="6">
          <BoardModule className="module" boardName="학생청원" />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContent;
