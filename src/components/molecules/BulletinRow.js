import React from "react";
import "./BulletinRow.scss";

const BulletinRow = ({ title, hashtags, date, writer }) => {
  return (
    <div className="Bulletin-row">
      <h5 className="">{title}</h5>
      <div className="d-flex">
        <h6 className="text-black-50 font-weight-light">
          {date + " | " + writer}
        </h6>
      </div>
    </div>
  );
};

export default BulletinRow;
