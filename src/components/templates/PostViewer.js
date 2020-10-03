import React from "react";

import { Loading } from "../atoms";

import { Container, Col } from "react-bootstrap";
import "./PostViewer.scss";

import { useTranslation } from "react-i18next";

const PostViewer = ({ post }) => {
  const { t } = useTranslation(["PostViewer"]);
  if (!post) return <Loading />;

  const {
    korAuthor,
    engAuthor,
    korTitle,
    engTitle,
    korContent,
    engContent,
    views,
    createdAt,
    boardId,
    Board
  } = post;
  let boardTitle;
  const boardLink = `/web/board/${boardId}`;
  if (Board) {
    boardTitle = { korTitle: Board.korTitle, engTitle: Board.engTitle };
  }
  console.log(post);

  const title = { korTitle, engTitle };
  const author = { korAuthor, engAuthor };
  const content = { korContent, engContent };

  return (
    <Container className="flex-grow-1 post-view">
      <div className="board-header">
        <a className="board-title" href={boardLink}>
          {t("title", { title: boardTitle })}
        </a>
      </div>
      <div className="post-title">{t("title", { title })}</div>
      <div className="d-flex flex-row">
        <div className="details">
          <b>{t("author", { author })}</b> | {t("views", { views })} |{" "}
          {typeof createdAt !== "undefined"
            ? createdAt.split(/T|.000Z/)[0]
            : ""}
        </div>
      </div>
      <Col md="8" lg="7" className="post-content">
        <div dangerouslySetInnerHTML={{ __html: t("content", { content }) }} />
      </Col>
    </Container>
  );
};
export default PostViewer;
