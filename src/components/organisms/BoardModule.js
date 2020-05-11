import React from "react";

import "./BoardModule.scss";
import { BoardHeader, BoardRow } from "../molecules";
import { isEmpty } from "lodash";

const BoardModule = ({ className, boardName, posts, bulletinId }) => {
  while (posts.length < 5)
    posts = posts.concat({
      author: "",
      title: "",
      date: ""
    });

  const rows = posts.slice(0, 5).map(post => (
    <>
      <BoardRow author={post.author} title={post.title} date={post.date} />
      <div className="divider" />
    </>
  ));

  return (
    <div className={`${className} board-module`}>
      <BoardHeader title={boardName} to={`/bulletin/${bulletinId}`} />
      {rows}
    </div>
  );
};

export default BoardModule;
