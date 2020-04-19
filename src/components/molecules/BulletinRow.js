import React from "react";
import { Link } from "react-router-dom";
import "./BulletinRow.scss";

const BulletinRow = ({ post }) => {
  const { title, date, author, id, created_at } = post;

  return (
    <div className="Bulletin-row">
      <Link to={`/post/${id}`}>
        <h5 className="">{title}</h5>
        <div className="d-flex">
          <h6 className="text-black-50 font-weight-light">
            {new Date(created_at).toLocaleDateString() + " | " + author}
          </h6>
        </div>
      </Link>
    </div>
  );
};

export default BulletinRow;
