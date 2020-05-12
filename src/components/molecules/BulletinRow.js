import React from "react";
import { Link } from "react-router-dom";
import "./BulletinRow.scss";

const BulletinRow = ({ post }) => {
  const { title, author, id, created_at } = post;

  return (
    <div className="bulletin-row-shell">
      <Link className="bulletin-row" to={`/web/post/${id}`}>
        <h5 className="">{title}</h5>
        <div className="d-flex">
          <h6 className="text-black-50 font-weight-light">
            {`${created_at.split(/T|.000Z/).join(" ")} | ${author}`}
          </h6>
        </div>
      </Link>
    </div>
  );
};

export default BulletinRow;
