import React from "react";
import { Link } from "react-router-dom";

import "./BoardRow.scss";

const BoardRow = props => {
  return (
    <Link to="/" className="d-flex flex-row board-row">
      <p align="center" className="row-author">
        {props.author}
      </p>
      <p className="flex-grow-1 row-title">{props.title}</p>
      <div className="row-date d-flex flex-row-reverse">{props.date}</div>
    </Link>
  );
};

export default BoardRow;
