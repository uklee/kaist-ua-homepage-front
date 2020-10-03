import React from "react";
import "./BoardRow.scss";

import { useTranslation } from "react-i18next";

const PetitionBoardRow = ({ petition }) => {
  const { id, korTitle, engTitle, createdAt, Students, isNew } = petition;

  const votes = Students.length;

  const { t } = useTranslation(["BoardRow"]);

  const title = { korTitle, engTitle };

  const newTag = isNew ? <div className="new-tag">NEW</div> : null;

  return (
    <div className="board-row-shell">
      <div className="title-row">
        {newTag}
        <a className="title" href={`/web/petition/${id}`}>
          {t("title", { title })}
        </a>
      </div>
      <div className="d-flex">
        <h6 className="details text-black-50">
          {`${t("votes", { votes })} | ${
            createdAt ? createdAt.split(/T|.000Z/)[0] : null
          }`}
        </h6>
      </div>
    </div>
  );
};

export default PetitionBoardRow;
