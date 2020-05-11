import React from "react";
import { Link } from "react-router-dom";

import "./SeeMore.scss";

const SeeMore = ({ to }) => {
  return (
    <Link className="d-flex align-items-center see-more" to={to}>
      <i className="material-icons plus-icon">add</i>
      더보기
    </Link>
  );
};

export default SeeMore;
