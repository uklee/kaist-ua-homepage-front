import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./HomeContent.scss";
import { HomeCarousel, BoardModule } from "../organisms";

const HomeContent = () => {
  const testDoc = {
    author: "집행지원실",
    title: "[긴급공지] 황지성, 코로나5747388 백신 개발 성공",
    date: "12월 31일"
  };
  const testDoc2 = {
    author: "넙모씨",
    title: "교내에 최광민을 발견했어요ㅜㅜ",
    date: "12월 31일"
  };
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
