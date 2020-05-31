import React from "react";
import { Link } from "react-router-dom";
import "./BulletinRow.scss";

const BulletinRow = ({ post, isUser }) => {
  const { title, author, id, created_at, views } = post;

  return (
    <div className="bulletin-row-shell">
      <Link className="bulletin-row" to={`/web/post/${id}`}>
        <div className="d-flex flex-row justify-content-between">
          <h5 className="">{title}</h5>
          {isUser ? "참여인원 4000명" : null}
        </div>
        <div className="d-flex">
          <h6 className="details text-black-50">
            <b>{author}</b>
            {` | 조회수 ${views} | ${
              created_at ? created_at.split(/T|.000Z/)[0] : null
            }`}
          </h6>
        </div>
      </Link>
    </div>
  );
};

export default BulletinRow;
