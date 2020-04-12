import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./HomeContent.scss";
import { HomeCarousel, BoardModule } from "../organisms";

const HomeContent = () => {
  const testDoc = {
    author: "복지국",
    title: "[제휴] <욱카>, 학기당 10회 사용 가능",
    date: "2020-12-30"
  };
  const testDoc2 = {
    author: "회장단",
    title: "윤현식 학생회장, 'CS311 교수 아니다' 해명",
    date: "2020-12-30"
  };
  return (
    <Container className="flex-grow-1 home-content">
      <HomeCarousel className="module" />
      <Row>
        <Col lg="6">
          <BoardModule doc={testDoc} className="module" boardName="제휴/복지" />
        </Col>
        <Col lg="6">
          <BoardModule doc={testDoc2} className="module" boardName="공지사항" />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContent;
