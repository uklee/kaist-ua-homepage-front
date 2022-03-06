import React, { useCallback, useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import { Header, Footer } from "../organisms";
import BoardContentContainer from "../containers/board/BoardContentContainer";
import { BoardList } from "../organisms";
import { BoardHeader, BoardFooter } from "../molecules";
import qs from "qs";
import * as postsAPI from "../../lib/api/post";
import { useTranslation } from "react-i18next";
const BoardPage = props => {
  const { t } = useTranslation(["Label"]);
  const { location, history } = props;
  const { boardId } = props.match.params;
  const { pageL, pageR } = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const [dataL, setDataL] = useState({ posts: null, lastPage: 1 });
  const [dataR, setDataR] = useState({ posts: null, lastPage: 1 });
  const getBoardsList = useCallback(() => {
    postsAPI
      .list({ page: pageL, boardId: 2 })
      .then(res2 => {
        const { posts, lastPage } = res2.data;
        setDataL({ posts, lastPage });
      })
      .catch(err => console.log(err));
    postsAPI
      .list({ page: pageR, boardId: 3 })
      .then(res2 => {
        const { posts, lastPage } = res2.data;
        setDataR({ posts, lastPage });
      })
      .catch(err => console.log(err));
  }, [pageL, pageR, boardId, location.pathname]);
  useEffect(() => {
    if (boardId == 23) {
      if (!pageL) history.push(`${location.pathname}?pageL=1`);
      else if (!pageR) history.push(`${location.pathname}?pageL=${pageL}&pageR=1`);
      else {
        getBoardsList();
      }
    }
  }, [boardId, pageL, pageR, location.pathname, history])
  if (boardId == 23)
    return (
      <div
        style={{ minHeight: "100vh", fontFamily: "NanumSquare" }}
        className="d-flex flex-column"
      >
        <Header active={boardId} />
        <Container className="flex-grow-1 board-content">
          <BoardHeader
            title={{ korTitle: "학생 복지", engTitle: "Student Welfare" }}
            description={{ korDescription: "학우들을 위한 제휴 및 기타 복지사업", engDescription: "Partnerships and discounts for students" }}
          />
          <div style={{
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "center",
            borderBottom: "solid 1px #555"
          }} className="d-flex flex-row">
            <div style={{
              width: "50%",
              minWidth: "320px",
              padding: "0 2vh",
            }}>
              {t("Label:label", {
                kor:
                  "학생회 제휴",
                eng:
                  "UA Partnerships"
              })}
              <BoardList posts={dataL?.posts} />
            </div>
            <div style={{
              width: "50%",
              minWidth: "320px",
              padding: "0 2vh"
            }}>
              {t("Label:label", {
                kor:
                  "학교 제휴",
                eng:
                  "College Partnerships"
              })}
              <BoardList posts={dataR?.posts} />
            </div>
          </div>
        </Container>
        {/*<BoardContentContainer boardId={boardId} />*/}
        <Footer />
      </div>
    );
  return (
    <div
      style={{ minHeight: "100vh", fontFamily: "NanumSquare" }}
      className="d-flex flex-column"
    >
      <Header active={boardId} />
      <BoardContentContainer boardId={boardId} />
      <Footer />
    </div>
  );
};

export default BoardPage;
