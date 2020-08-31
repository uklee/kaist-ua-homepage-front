import React from "react";
import { Link } from "react-router-dom";

import "./SeeMore.scss";

import { useTranslation } from "react-i18next";

const SeeMore = ({ to }) => {
  const { t } = useTranslation(["SeeMore"]);
  return (
    <Link className="d-flex align-items-center see-more" to={to}>
      <i className="material-icons plus-icon">add</i>
      {t("더보기")}
    </Link>
  );
};

export default SeeMore;
