import React from "react";
import "./BoardHeader.scss";

const BoardHeader = ({ title, description, isUser }) => {
  return (
    <>
      <div className="board-header-title">{title}</div>
      <div className="board-description">{description}</div>
    </>
    // <div className="justify-content-between align-items-center border-bottom Board-header">
    //   <h3 className="Board-title text-primary">{title}</h3>
    //   <h6 className="Board-desc">{description}</h6>
    // </div>
  );
};

export default BoardHeader;
