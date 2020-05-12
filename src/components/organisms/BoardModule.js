import React from "react";

import "./BoardModule.scss";
import { BoardHeader, BoardRow } from "../molecules";
import { isEmpty } from "lodash";

const BoardModule = ({ className, boardName, posts, bulletinId }) => {
  while (posts.length < 5)
    posts = posts.concat({
      id: "",
      author: "",
      title: "",
      date: "",
      created_at: ""
    });
  console.log(posts);

  const rows = posts.slice(0, 5).map(post => (
    <>
      <BoardRow
        id={post.id}
        author={post.author}
        title={post.title}
        date={post.date}
        createdAt={post.created_at}
      />
      <div className="divider" />
    </>
  ));

  return (
    <div className={`${className} board-module`}>
      <BoardHeader title={boardName} to={`/web/bulletin/${bulletinId}`} />
      {rows}
    </div>
  );
};

export default BoardModule;
