import React from "react";

import { Loading } from "../atoms";

import { Container } from "react-bootstrap";
import "./PostViewer.scss";

import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const PostViewer = ({ post, onEdit, onRemove }) => {
  const { t } = useTranslation(["PostViewer"]);
  const { auth } = useSelector(state => state.auth);
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
      <div md="8" lg="7" className="post-content">
        <div dangerouslySetInnerHTML={{ __html: t("content", { content }) }} />
      </div>

      {auth === "admin" ? (
        <div className="d-flex justify-content-end py-3">
          <Button
            variant="outline-primary"
            className="mr-3"
            onClick={onEdit}
          >
            글 수정하기
          </Button>
          <Button
            variant="outline-primary"
            onClick={onRemove}
          >
            글 삭제하기
          </Button>
        </div>
      ) : (
        <div />
      )}

    </Container>
  );
};
export default PostViewer;
