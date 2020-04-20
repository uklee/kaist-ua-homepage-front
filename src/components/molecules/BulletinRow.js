import React from "react";
import { Link } from "react-router-dom";
import "./BulletinRow.scss";

const BulletinRow = ({ post }) => {
  const { title, author, id, createdAt } = post;
  console.log(createdAt);

  return (
    <div className="bulletin-row-shell">
      <Link className="bulletin-row" to={`/post/${id}`}>
        <h5 className="">{title}</h5>
        <div className="d-flex">
          <h6 className="text-black-50 font-weight-light">
            {`${createdAt.split(/T|.000Z/).join(" ")} | ${author}`}
          </h6>
        </div>
      </Link>
    </div>
  );
};

export default BulletinRow;
