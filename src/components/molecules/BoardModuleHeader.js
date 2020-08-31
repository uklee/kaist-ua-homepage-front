import React from "react";

import "./BoardModuleHeader.scss";
import { SeeMore } from "../atoms";

const BoardModuleHeader = ({ title, to }) => {
  return (
    <div className="d-flex justify-content-between align-items-center boardModule-header">
      <h4 className="boardModule-title">{title}</h4>
      <SeeMore to={to} />
    </div>
  );
};
export default BoardModuleHeader;
