import React from "react";

import "./BoardHeader.scss";
import { SeeMore } from "../atoms";

const BoardHeader = ({ title, to }) => {
  return (
    <div className="d-flex justify-content-between align-items-center board-header">
      <h4 className="board-title">{title}</h4>
      <SeeMore to={to} />
    </div>
  );
};
export default BoardHeader;
