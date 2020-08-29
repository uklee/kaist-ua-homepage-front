import React from "react";

import "./BoardModule.scss";
import { BoardModuleHeader, BoardModuleRow } from "../molecules";

const BoardModule = ({ className, boardModuleName, posts, boardId }) => {
  if (!posts) posts = [];
  while (posts.length < 5)
    posts = posts.concat({
      id: posts.length,
      author: "",
      title: "",
      date: "",
      created_at: ""
    });

  const rows = posts.slice(0, 5).map(post => (
    <React.Fragment key={post.id}>
      <BoardModuleRow
        id={post.id}
        author={post.author}
        title={post.title}
        date={post.date}
        createdAt={post.createdAt}
      />
      <div className="board-module-divider" />
    </React.Fragment>
  ));

  return (
    <div className={`${className} boardModule-module`}>
      <BoardModuleHeader title={boardModuleName} to={`/web/board/${boardId}`} />
      {rows}
    </div>
  );
};

export default BoardModule;
