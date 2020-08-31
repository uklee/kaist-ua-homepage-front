import React from "react";
import "./BoardHeader.scss";

import { useTranslation } from "react-i18next";

const BoardHeader = ({ title, description }) => {
  const { t } = useTranslation(["BoardHeader"]);

  const actualTitle = typeof title === "string" ? title : t("title", { title });
  const actualDescription =
    typeof description === "string"
      ? description
      : t("description", { description });

  return (
    <>
      <div className="board-header-title">{actualTitle}</div>
      <div className="board-description">{actualDescription}</div>
    </>
  );
};

export default BoardHeader;
