import React from "react";

import "./BoardModule.scss";
import { BoardHeader, BoardRow } from "../molecules";

const BoardModule = props => {
  let docs = [];
  for (let i = 0; i < 5; i++) {
    docs.push(props.doc);
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
