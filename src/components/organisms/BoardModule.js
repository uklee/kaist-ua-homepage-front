import React from "react";

import "./BoardModule.scss";
import { BoardModuleHeader, BoardModuleRow } from "../molecules";

import { useTranslation } from "react-i18next";

const BoardModule = ({ className, board, posts }) => {
  const { t } = useTranslation(["BoardModule"]);

  if (!posts) posts = [];
  while (posts.length < 5)
    posts = posts.concat({
      id: posts.length,
      author: "",
      title: "",
      date: "",
      createdAt: ""
    });
  console.log(posts);

  const rows = posts.map(post => (
    <React.Fragment key={post.id}>
      <BoardModuleRow
        id={post.id}
        author={post.korAuthor}
        title={post.korTitle}
        date={post.date}
        createdAt={post.createdAt}
      />
      <div className="board-module-divider" />
    </React.Fragment>
  ));

  return (
    <div className={`${className} boardModule-module`}>
      <BoardModuleHeader
        title={t("title", { board })}
        to={`/web/board/${board.id}`}
      />
      {rows}
    </div>
  );
};

export default BoardModule;
