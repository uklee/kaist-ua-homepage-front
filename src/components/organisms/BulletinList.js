import React from "react";
import "./BulletinList.scss";
import { BulletinRow } from "../molecules";

const BulletinList = ({ posts }) => {
  if (!posts) return <div className="bulletin-list"></div>;

  const rows = posts.map(post => <BulletinRow key={post.id} post={post} />);

  return <div className="bulletin-list">{rows}</div>;
};

export default BulletinList;
