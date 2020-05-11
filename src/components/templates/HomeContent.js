import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./HomeContent.scss";
import { HomeCarousel, BoardModule } from "../organisms";
import bulletins from "../../modules/bulletins";
import { isEmpty } from "lodash";

const testDoc = [
  {
    author: "복지국",
    title: "[제휴] <욱카>, 학기당 10회 사용 가능",
    date: "2020-12-30"
  },
  {
    author: "복지국",
    title: "[제휴] <욱카>, 학기당 10회 사용 가능",
    date: "2020-12-30"
  },
  {
    author: "복지국",
    title: "[제휴] <욱카>, 학기당 10회 사용 가능",
    date: "2020-12-30"
  },
  {
    author: "복지국",
    title: "[제휴] <욱카>, 학기당 10회 사용 가능",
    date: "2020-12-30"
  }
];
const testDoc2 = [
  {
    author: "회장단",
    title: "윤현식 학생회장, 'CS311 교수 아니다' 해명",
    date: "2020-12-30"
  },
  {
    author: "회장단",
    title: "윤현식 학생회장, 'CS311 교수 아니다' 해명",
    date: "2020-12-30"
  },
  {
    author: "회장단",
    title: "윤현식 학생회장, 'CS311 교수 아니다' 해명",
    date: "2020-12-30"
  }
];

const HomeContent = ({ BoardInfos }) => {
  if (!BoardInfos) return <div>로딩중...</div>;
  console.log(BoardInfos);

  const boards = isEmpty(BoardInfos) ? (
    <div></div>
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
