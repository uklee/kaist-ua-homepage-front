import React from 'react';
import './BulletinRow.scss';

import { Hashtag } from "../atoms";

const BulletinRow = ({ title, hashtags, date, writer }) => {

  const hashtagList = hashtags.map(
    hashtag => (
      <Hashtag>{hashtag}</Hashtag>
    )
  );

  return (
    <div className="Bulletin-row">
      <h5 className="">{title}</h5>
      <div className="d-flex">
        {hashtagList}
      </div>
      <div className="d-flex">
        <h6 className="text-black-50 font-weight-light">{date + " | " + writer}</h6>
      </div>

    </div>
  )
};

export default BulletinRow;