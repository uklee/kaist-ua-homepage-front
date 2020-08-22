import React from "react";

import "./BoardModule.scss";
import { BoardHeader, BoardRow } from "../molecules";

const BoardModule = ({ className, boardName, posts, bulletinId }) => {
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
      <BoardRow
        id={post.id}
        author={post.author}
        title={post.title}
        date={post.date}
        createdAt={post.createdAt}
      />
      <div className="divider" />
    </React.Fragment>
  ));

  return (
    <div className={`${className} board-module`}>
      <BoardHeader title={boardName} to={`/web/bulletin/${bulletinId}`} />
      {rows}
    </div>
  );
};

export default BoardModule;
