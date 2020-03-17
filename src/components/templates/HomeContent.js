import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./HomeContent.scss";
import { HomeCarousel, BoardModule } from "../organisms";

const HomeContent = () => {
  const testDoc = {
    author: "집행지원실",
    title: "[긴급공지] 황지성, 코로나19 백신 개발 성공",
    date: "2020-12-30"
  };
  const testDoc2 = {
    author: "충격/공포",
    title: "교내에 최광민을 발견했어요ㅜㅜ",
    date: "2020-12-30"
  };
  return (
    <Container className="flex-grow-1 home-content">
      <HomeCarousel className="module" />
      <Row>
        <Col lg="6">
          <BoardModule doc={testDoc} className="module" boardName="공지사항" />
        </Col>
        <Col lg="6">
          <BoardModule doc={testDoc2} className="module" boardName="학생청원" />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContent;
