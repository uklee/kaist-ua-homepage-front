import React from "react";
import { Container, Spinner } from "react-bootstrap";
import "./BoardContent.scss";
import { BoardList } from "../organisms";
import { BoardHeader, BoardFooter } from "../molecules";
import { isEmpty } from "lodash";

const BoardContent = ({ boards, boardId, posts, isUser }) => {
  if (isEmpty(boards))
    return (
      <Container className="flex-grow-1 board-loading">
        <Spinner animation="border" />
        <div>Loading...</div>
      </Container>
    );

  const board = boards.find(board => `${board.id}` === boardId);

  const { title, description } = board;

  return (
    <Container className="flex-grow-1 board-content">
      <BoardHeader title={title} description={description} isUser />
      <BoardList posts={posts} isUser={isUser} />
      <BoardFooter />
    </Container>
  );
};

export default BoardContent;
