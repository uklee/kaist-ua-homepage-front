import React from "react";

import "./BoardModule.scss";
import { BoardHeader, BoardRow } from "../molecules";

const BoardModule = props => {
  const testDoc = {
    author: "집행지원실",
    title: "[긴급공지] 황지성, 코로나19 백신 개발 성공",
    date: "12월 31일"
  };
  let docs = [];
  for (let i = 0; i < 5; i++) {
    docs.push(testDoc);
  }
  return (
    <div className={`${props.className} board-module`}>
      <BoardHeader title={props.boardName} />
      {docs.map(doc => (
        <BoardRow author={doc.author} title={doc.title} date={doc.date} />
      ))}
    </div>
  );
};

export default BoardModule;
