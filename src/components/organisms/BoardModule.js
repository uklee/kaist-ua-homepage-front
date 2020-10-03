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
      date: "",
      createdAt: ""
    });

  const rows = posts.map(post => {
    const { korTitle, engTitle, korAuthor, engAuthor } = post;
    const title = korTitle ? { kor: korTitle, eng: engTitle } : "";
    const author = { kor: korAuthor, eng: engAuthor };
    return (
      <React.Fragment key={post.id}>
        <BoardModuleRow
          id={post.id}
          author={author}
          title={title}
          date={post.date}
          createdAt={post.createdAt}
        />
        <div className="board-module-divider" />
      </React.Fragment>
    );
  });

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
