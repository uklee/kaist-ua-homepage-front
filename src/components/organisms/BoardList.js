import React from "react";
import "./BoardList.scss";
import { BoardRow } from "../molecules";

const BoardList = ({ posts, isUser }) => {
  if (!posts) return <div className="board-list"></div>;

  const rows = posts.map(post => (
    <BoardRow key={post.id} post={post} isUser={isUser} />
  ));

  return <div className="board-list">{rows}</div>;
};

export default BoardList;
