import React from "react";
import { Container, Col } from "react-bootstrap";

import "./PostViewer.scss";

// const sample = {
//   title: "총학생회 리크루팅 연기 안내",
//   author: "집행지원실",
//   views: 4000,
//   createdAt: "2020-04-15",
//   content:
//     '<span role="img" aria-label="fire">' +
//     "🔥" +
//     "</span>" +
//     "안녕하세요. KAIST 학부 총학생회 <b>FLEX</b>입니다!🔥 <br /> <br />" +
//     "다름이 아니라 저희가 지금 학교 전체적인 큰 변화로 인해 본래" +
//     "진행되었어야 할 리크루팅 일정(3/16부터 지원 시작)에 차질이" +
//     "생겨버렸습니다.ㅠ_ㅠ <br />" +
//     "<br /> 물론 리크루팅을 안할 건 절대 아니랍니다!!🥰 기다려주신 모든" +
//     "분들께는 죄송하지만 최대한 빠르게 리크루팅에 대해 내부 논의를 한 후" +
//     "<b> 3/18(수)</b>까지 반드시 공지해드릴게요! <br /> <br /> 모두들 몸" +
//     "조심하시고 정말 쫌만 기다려주세요!!ㅠㅠ😥😥 리크루팅 진행하긴" +
//     "할겁니다! 걱정마세요! 모두들 화이팅~"
// };

const PostViewer = ({ post }) => {
  if (!post) return <div>로딩중...</div>;
  const { title, author, views, createdAt, content } = post;

  return (
    <Container className="flex-grow-1 post-view">
      <div className="bulletin-title">공지사항</div>
      <div className="post-title">{title}</div>
      <div className="d-flex flex-row">
        <div className="details">
          <b>{author}</b> | 조회수 {views} | {createdAt.split(/T|.000Z/)[0]}
        </div>
      </div>
      <Col md="8" lg="7" className="post-content">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Col>
    </Container>
  );
};

export default PostViewer;
