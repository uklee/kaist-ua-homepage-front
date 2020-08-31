import React from "react";

import "./BoardModule.scss";
import { BoardModuleHeader, BoardModuleRow } from "../molecules";

import { useTranslation } from "react-i18next";

const BoardModule = ({ className, board, posts }) => {
  const { t } = useTranslation(["BoardModule"]);

  console.log(board);

  if (!posts) posts = [];
  while (posts.length < 5)
    posts = posts.concat({
      id: posts.length,
      author: "",
      title: "",
      date: "",
      createdAt: ""
    });

  const rows = posts.map(post => (
    <React.Fragment key={post.id}>
      <BoardModuleRow
        id={post.id}
        author={post.author}
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
