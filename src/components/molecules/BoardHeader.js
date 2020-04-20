import React from "react";

import "./BoardHeader.scss";
import { SeeMore } from "../atoms";

const BoardHeader = props => {
  return (
    <div className="d-flex justify-content-between align-items-center board-header">
      <h4 className="board-title">{props.title}</h4>
      <SeeMore />
    </div>
  );
};
export default BoardHeader;
