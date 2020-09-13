import React from "react";
import "./BoardRow.scss";

import { useTranslation } from "react-i18next";

const BoardRow = ({ post }) => {
  const { id, author, korTitle, engTitle, createdAt, views, isNew } = post;

  const { t } = useTranslation(["BoardRow"]);

  const title = { korTitle, engTitle };

  const newTag = isNew ? <div className="new-tag">NEW</div> : null;

  return (
    <div className="board-row-shell">
      <div className="title-row">
        {newTag}
        <a className="title" href={`/web/post/${id}`}>
          {t("title", { title })}
        </a>
      </div>
      <div className="d-flex">
        <h6 className="details text-black-50">
          <b>{author}</b>
          {` | ${t("views", { views })} | ${
            createdAt ? createdAt.split(/T|.000Z/)[0] : null
          }`}
        </h6>
      </div>
    </div>
  );
};

export default BoardRow;
